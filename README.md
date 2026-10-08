# 🚩 CTF Platform

A lightweight, **fully static** Capture The Flag platform you can host for **free** on GitHub Pages. Perfect for running a friendly hacking competition with your friends.

![challenges](https://img.shields.io/badge/challenges-7-00ff9c) ![total points](https://img.shields.io/badge/total%20points-1100-ffcc00) ![hosting](https://img.shields.io/badge/hosting-GitHub%20Pages%20(free)-blue)

## 🎯 Challengers start here

Visit the live site, enter a hacker name, solve challenges, and submit flags in the format `CTF{...}`. Categories:

| Category | Challenge | Points |
|---|---|---|
| 🌐 Web | Source Code Secrets | 100 |
| 🔐 Crypto | Caesar's Favorite Salad | 100 |
| 🔐 Crypto | Base(ic) Instinct | 150 |
| 🌐 Web | Cookie Monster | 150 |
| 🗂️ Misc | Ask the Robots | 150 |
| 🕵️ Forensics | Hidden in Plain Sight | 200 |
| 🔓 Reversing | Reverse the XOR | 250 |

## 🚀 Deploy to GitHub Pages (5 minutes)

```bash
# 1. Create a NEW repo on github.com (e.g. "ctf-platform") — do NOT initialize it

# 2. In this folder:
git init
git add .
git commit -m "🚩 initial CTF platform"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ctf-platform.git
git push -u origin main
```

3. On GitHub: repo **Settings → Pages → Build and deployment**
4. Source: **Deploy from a branch** → Branch: **main** → Folder: **/(root)** → Save
5. Wait ~1 minute, then share: `https://YOUR-USERNAME.github.io/ctf-platform/`

> ⚠️ **Important for the "Ask the Robots" challenge:** GitHub Pages serves `robots.txt` from the repo root automatically — no extra setup needed. The `/top-secret/flag.txt` path also just works.

## ✏️ Customizing

Everything lives in **`js/challenges.js`** — title, description, points, hints, and the flag hash for each challenge.

**To change a flag:**

```bash
bash tools/new_flag.sh "CTF{your_new_flag}"
# → copy the printed hash into the challenge's "hash" field in js/challenges.js
git add . && git commit -m "new flag" && git push
```

**To add a challenge:** create a page in `challenges/`, generate a hash with `tools/new_flag.sh`, and add an entry to the `CHALLENGES` array in `js/challenges.js`.

**To rename the site:** edit the `<span id="siteTitle">` in `index.html` and the hero heading.

## ⚠️ Honest limitations (static hosting)

- **No server-side code.** Flags are verified in the browser by comparing SHA-256 hashes — plaintext flags never appear in `js/challenges.js`... but challenge *files themselves* (HTML comments, the PNG, the JS) necessarily contain the flags. Determined source-diggers can find them. For friends: fine, it's part of the fun and a learning moment. 😄
- **Scoreboard is per-browser** (localStorage) — each player's progress lives on their own device; there's no shared global leaderboard.
- Need accounts, a global live scoreboard, and server-side flag checking? Use **[CTFd](https://ctfd.io/)** — free and open source, but requires a real server (won't run on GitHub Pages).

## 📁 Project structure

```
ctf-platform/
├── index.html          # main scoreboard + challenge hub
├── css/style.css       # dark hacker theme
├── js/
│   ├── challenges.js   # ⭐ edit this: challenges + flag hashes
│   └── app.js          # flag checking, scoring, leaderboard
├── challenges/         # one page per challenge
├── assets/top_secret.png  # forensics evidence file
├── robots.txt          # part of the "Ask the Robots" challenge
├── top-secret/flag.txt # ...and its reward
└── tools/new_flag.sh   # flag hash generator
```
