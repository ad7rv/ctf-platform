/* ============================================================
 * CTF Platform - Core logic
 * - Flag verification via SHA-256 (SubtleCrypto)
 * - Per-player progress + score stored in localStorage
 * - Leaderboard for this browser
 * ============================================================ */

const LS_PLAYERS = "ctf_players_v1";
const LS_CURRENT = "ctf_current_player";

/* ---------- storage helpers ---------- */
function getPlayers() {
  try {
    return JSON.parse(localStorage.getItem(LS_PLAYERS)) || {};
  } catch {
    return {};
  }
}
function savePlayers(p) {
  localStorage.setItem(LS_PLAYERS, JSON.stringify(p));
}
function getCurrentPlayer() {
  return localStorage.getItem(LS_CURRENT) || "";
}
function setCurrentPlayer(name) {
  localStorage.setItem(LS_CURRENT, name);
}

/* ---------- crypto ---------- */
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/* ---------- scoring ---------- */
function scoreOf(player) {
  return player.solved.reduce((sum, id) => {
    const c = CHALLENGES.find((c) => c.id === id);
    return sum + (c ? c.points : 0);
  }, 0);
}

/* ---------- UI: player bar ---------- */
function renderPlayerBar() {
  const el = document.getElementById("playerBar");
  const name = getCurrentPlayer();
  if (name) {
    const players = getPlayers();
    const p = players[name] || { solved: [] };
    el.innerHTML = `
      <span class="player-chip">👤 <b>${escapeHtml(name)}</b> · ${scoreOf(p)} pts · ${p.solved.length}/${CHALLENGES.length} solved</span>
      <button class="btn btn-ghost" id="switchPlayer">Switch</button>`;
  } else {
    el.innerHTML = `
      <input id="playerNameInput" class="input" maxlength="20" placeholder="Enter your hacker name" />
      <button class="btn btn-primary" id="joinBtn">Join</button>`;
  }
  const joinBtn = document.getElementById("joinBtn");
  if (joinBtn) {
    joinBtn.onclick = joinPlayer;
    document
      .getElementById("playerNameInput")
      .addEventListener("keydown", (e) => e.key === "Enter" && joinPlayer());
  }
  const switchBtn = document.getElementById("switchPlayer");
  if (switchBtn) switchBtn.onclick = () => { setCurrentPlayer(""); renderAll(); };
}

function joinPlayer() {
  const input = document.getElementById("playerNameInput");
  const name = (input.value || "").trim();
  if (!name) return;
  const players = getPlayers();
  if (!players[name]) players[name] = { solved: [], firstSolvedAt: null };
  savePlayers(players);
  setCurrentPlayer(name);
  renderAll();
}

/* ---------- UI: challenge cards ---------- */
function cardHtml(c, solved, playerName) {
  const catClass = "cat-" + c.category.toLowerCase();
  return `
  <article class="card ${solved ? "solved" : ""}" data-category="${c.category}">
    <div class="card-top">
      <span class="badge ${catClass}">${c.category}</span>
      <span class="diff diff-${c.difficulty.toLowerCase()}">${c.difficulty}</span>
    </div>
    <h3>${escapeHtml(c.title)}</h3>
    <p class="desc">${escapeHtml(c.description)}</p>
    <div class="card-meta">
      <span class="points">${c.points} pts</span>
      <a class="btn btn-small" href="${c.link}">Open challenge ↗</a>
      <button class="btn btn-small btn-ghost hint-btn" data-hint="${escapeHtml(c.hint)}">💡 Hint</button>
    </div>
    <form class="flag-form" data-id="${c.id}">
      <input class="input flag-input" placeholder="CTF{...}" autocomplete="off"
             ${playerName ? "" : "disabled"} />
      <button class="btn btn-primary" type="submit" ${playerName ? "" : "disabled"}>
        ${solved ? "✓ Solved" : "Submit"}
      </button>
    </form>
    <div class="flag-msg" id="msg-${c.id}">${solved ? "✅ Already solved!" : ""}</div>
  </article>`;
}

/* ---------- UI: leaderboard ---------- */
function renderLeaderboard() {
  const players = getPlayers();
  const rows = Object.entries(players)
    .map(([name, p]) => ({ name, score: scoreOf(p), solved: p.solved.length }))
    .sort((a, b) => b.score - a.score)
    .map(
      (r, i) => `<tr>
        <td>${["🥇", "🥈", "🥉"][i] || i + 1}</td>
        <td>${escapeHtml(r.name)}</td>
        <td>${r.score}</td>
        <td>${r.solved}/${CHALLENGES.length}</td>
      </tr>`
    )
    .join("");
  document.getElementById("leaderboardBody").innerHTML =
    rows || `<tr><td colspan="4" class="empty">No players yet — be the first!</td></tr>`;
}

/* ---------- flag submission ---------- */
async function handleSubmit(form) {
  const id = form.dataset.id;
  const challenge = CHALLENGES.find((c) => c.id === id);
  const input = form.querySelector(".flag-input");
  const msg = document.getElementById("msg-" + id);
  const flag = input.value.trim();
  const name = getCurrentPlayer();
  if (!name) { msg.textContent = "⚠️ Join with a hacker name first!"; return; }
  if (!flag) { msg.textContent = "⚠️ Enter a flag."; return; }

  const players = getPlayers();
  const player = players[name];
  if (player.solved.includes(id)) { msg.textContent = "✅ Already solved!"; return; }

  msg.textContent = "⏳ Checking...";
  const hash = await sha256(flag);

  if (hash === challenge.hash) {
    player.solved.push(id);
    if (!player.firstSolvedAt) player.firstSolvedAt = Date.now();
    savePlayers(players);
    msg.textContent = `🎉 Correct! +${challenge.points} pts`;
    msg.className = "flag-msg ok";
    burst();
    renderAll();
  } else {
    msg.textContent = "❌ Wrong flag. Try again!";
    msg.className = "flag-msg bad";
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 400);
  }
}

/* ---------- tiny confetti burst ---------- */
function burst() {
  for (let i = 0; i < 24; i++) {
    const s = document.createElement("span");
    s.className = "confetti";
    s.style.left = Math.random() * 100 + "vw";
    s.style.background = ["#00ff9c", "#ff0055", "#ffcc00", "#00ccff"][i % 4];
    s.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1600);
  }
}

/* ---------- filters ---------- */
function renderChallenges(filter = "All") {
  const name = getCurrentPlayer();
  const players = getPlayers();
  const solved = name && players[name] ? players[name].solved : [];
  const grid = document.getElementById("grid");
  grid.innerHTML = CHALLENGES.filter(
    (c) => filter === "All" || c.category === filter
  )
    .map((c) => cardHtml(c, solved.includes(c.id), name))
    .join("");

  grid.querySelectorAll(".flag-form").forEach((f) =>
    f.addEventListener("submit", (e) => { e.preventDefault(); handleSubmit(f); })
  );
  grid.querySelectorAll(".hint-btn").forEach((b) =>
    b.addEventListener("click", (e) => { e.preventDefault(); alert("💡 " + b.dataset.hint); })
  );
}

function renderFilters() {
  const cats = ["All", ...new Set(CHALLENGES.map((c) => c.category))];
  const bar = document.getElementById("filters");
  bar.innerHTML = cats
    .map((c, i) => `<button class="btn btn-ghost filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");
  bar.querySelectorAll(".filter-btn").forEach((b) =>
    b.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      renderChallenges(b.dataset.cat);
    })
  );
}

/* ---------- progress ---------- */
function renderProgress() {
  const name = getCurrentPlayer();
  const players = getPlayers();
  const solved = name && players[name] ? players[name].solved.length : 0;
  const pct = Math.round((solved / CHALLENGES.length) * 100);
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressText").textContent = name
    ? `${solved}/${CHALLENGES.length} challenges · ${pct}%`
    : "Join to track your progress";
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[m]));
}

function renderAll() {
  renderPlayerBar();
  renderChallenges(document.querySelector(".filter-btn.active")?.dataset.cat || "All");
  renderLeaderboard();
  renderProgress();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderAll();
  typeWriter();
});

/* ---------- hero typewriter ---------- */
function typeWriter() {
  const el = document.getElementById("typer");
  if (!el) return;
  const lines = [
    "> booting ctf-platform ...",
    "> loading 7 challenges ...",
    "> categories: web · crypto · forensics · reversing · misc",
    "> good luck, hacker. █",
  ];
  let li = 0, ci = 0, out = "";
  const tick = () => {
    if (li >= lines.length) return;
    out += lines[li][ci] || "";
    el.textContent = out;
    ci++;
    if (ci > lines[li].length) { li++; ci = 0; out += "\n"; setTimeout(tick, 350); }
    else setTimeout(tick, 24);
  };
  tick();
}
