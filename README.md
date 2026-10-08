# 🚩 CTF Platform

A lightweight, **fully static** Capture The Flag platform you can host for **free** on GitHub Pages. Perfect for running a friendly hacking competition with your friends.

![challenges](https://img.shields.io/badge/challenges-77-00ff9c) ![total points](https://img.shields.io/badge/total%20points-12850-ffcc00) ![hosting](https://img.shields.io/badge/hosting-GitHub%20Pages%20(free)-blue)

## 🎯 Challengers start here

Visit the live site, enter a hacker name, solve challenges, and submit flags in the format `CTF{...}`.

| Category | Count | Highlights |
|---|---|---|
| 🌐 Web | 14 | view-source, cookies, meta tags, SQLi sim, localStorage, sitemap, dir guess, split comments, entities, CSS/JS files, unlisted page, 3-part flag |
| 🔐 Crypto | 17 | ROT13, Caesar, hex, binary, Morse, base64×2, base32, base58, octal, decimal ASCII, URL-encoding, ROT47, single-byte XOR, rail fence, Vigenère, Atbash |
| 🕵️ Forensics | 12 | PNG trailer, tEXt chunk, gzip mislabel, log grep, b64 file, hex pcap, zip, tar-in-tar, docx=zip, PDF text, memory dump, JSON logs |
| 👻 Stego | 8 | acrostic, zero-width, case-bits, every-4th-word, CSS colors, reversed file, every-3rd-char, 0px spans |
| 🔓 Reversing | 9 | XOR, charcodes, char-by-char check, atob, double-atob, ±1 offsets, minus-13, array flip, index cipher |
| 🌍 OSINT | 6 | **real git forensics on this repo:** deleted commit, hidden branch, commit message, annotated tag, RAW README, flag-as-filename |
| 🗂️ Misc | 1 | robots.txt treasure map |
| 🧮 Programming | 10 | primes sum, factorial digits, fib(40), md5, vowel/even counts, longest word, hex XOR, caesar shift discovery |

## 🚀 Deploy to GitHub Pages (5 minutes)

```bash
git init && git add . && git commit -m "ctf"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ctf-platform.git
git push -u origin main
```

Then: repo **Settings → Pages → Deploy from a branch → main / (root)** → share `https://YOUR-USERNAME.github.io/ctf-platform/`.

## ✏️ Customizing

- All challenge metadata lives in **`js/challenges.js`** (`CHALLENGES` array).
- Change a flag:

```bash
bash tools/new_flag.sh "CTF{new_flag_here}"
# paste the printed hash into the challenge entry, commit, push — live in ~1 min
```

- Add a challenge: create `challenges/mychallenge.html`, generate a hash, append an entry in `js/challenges.js`.

## ⚠️ Honest limitations (static hosting)

- No server-side code: flags are verified by SHA-256 in the browser. Challenge *files themselves* must contain flags, so determined source-diggers can find them — house rule it. 😄
- Leaderboard is per-browser (localStorage). For a shared global scoreboard use CTFd on a real server.
- The OSINT challenges intentionally use this repo's real git history/branches/tags — deleting them breaks those flags.

## 📁 Structure

```
index.html · css/ · js/{app.js,challenges.js}
challenges/          # 77 challenge pages
assets/              # downloads: logs, binaries, archives, stego files
robots.txt · sitemap.xml · top-secret/ · backup/   # challenge treasure paths
tools/new_flag.sh    # SHA-256 flag-hash generator
```
<!-- maintainer note: never delete this comment. recovery code: CTF{r4w_r34dm3_c0mm3nt} -->
