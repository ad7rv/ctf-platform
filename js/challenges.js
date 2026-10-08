/* ============================================================
 * CTF Platform - Challenge Configuration
 * ------------------------------------------------------------
 * Each challenge stores only the SHA-256 HASH of its flag,
 * never the plaintext flag. To change a flag, run:
 *
 *     bash tools/new_flag.sh "CTF{your_new_flag}"
 *
 * ...and paste the printed hash into the matching challenge.
 * ============================================================ */

const CHALLENGES = [
  {
    id: "web1",
    title: "Source Code Secrets",
    category: "Web",
    points: 100,
    difficulty: "Easy",
    description:
      "A developer left something behind on this page. Developers love leaving notes to themselves. Can you find it?",
    link: "challenges/web1.html",
    hint: "Right-click → View Page Source. Browsers render HTML, but humans can read it all.",
    hash: "540cae84bc7695a09b211c8337b5b53a8c5db89c7c050e2c1faaceefa5956f81", // CTF{v13w_s0urce_pr0}
  },
  {
    id: "crypto1",
    title: "Caesar's Favorite Salad",
    category: "Crypto",
    points: 100,
    difficulty: "Easy",
    description:
      "Julius loved shifting letters around. This message looks rotated. Un-rotate it 13 places to taste the flag.",
    link: "challenges/crypto1.html",
    hint: "ROT13. Try `tr 'A-Za-z' 'N-ZA-Mn-za-m'` or an online ROT13 decoder.",
    hash: "f23c136d641a25297eaba1248f45755a032fe4dd2426a9c98773c25136f8df94", // CTF{r0t13_1snt_crypt0}
  },
  {
    id: "crypto2",
    title: "Base(ic) Instinct",
    category: "Crypto",
    points: 150,
    difficulty: "Easy",
    description:
      "Encoding is not encryption. This blob has been base64-encoded... maybe more than once. Decode your way to the flag.",
    link: "challenges/crypto2.html",
    hint: "Run `base64 -d` repeatedly until you see CTF{ ... }",
    hash: "56989c5899b08c5672c6354a11af68fe3a8b46478540ea8998c70dfe7b38e797", // CTF{b4s364_1s_n0t_s3cur3}
  },
  {
    id: "web2",
    title: "Cookie Monster",
    category: "Web",
    points: 150,
    difficulty: "Medium",
    description:
      "This page is baking something delicious. Check what your browser stored after visiting it.",
    link: "challenges/web2.html",
    hint: "DevTools → Application → Cookies, or type document.cookie in the console.",
    hash: "2f03c7b9e101faddf0f848725cb523fefe199c5151f63dbe5eecb1266857636f", // CTF{c00k13_m0nst3r_4t3_th3_fl4g}
  },
  {
    id: "misc1",
    title: "Ask the Robots",
    category: "Misc",
    points: 150,
    difficulty: "Medium",
    description:
      "Webmasters tell search-engine robots where NOT to go. Sometimes that file is a treasure map.",
    link: "challenges/misc1.html",
    hint: "Every website has a /robots.txt. Go read ours.",
    hash: "274afc12c95fecd56dcac07aade462b26e6df00dc668d7711a0cc6a75a1ade09", // CTF{r0b0ts_kn0w_s3cr3ts}
  },
  {
    id: "forensics1",
    title: "Hidden in Plain Sight",
    category: "Forensics",
    points: 200,
    difficulty: "Medium",
    description:
      "This image looks perfectly normal. But files don't always end where viewers think they do. Something was appended after the end of the image data.",
    link: "challenges/forensics1.html",
    hint: "Try `strings image.png` or open it in a hex editor and scroll to the very end, past IEND.",
    hash: "5caf22b4a436572a97da1d162aa639d338867a4366d6ba7d06b1b3ba24f258d3", // CTF{m4g1c_byt3s_4nd_tr41l3rs}
  },
  {
    id: "rev1",
    title: "Reverse the XOR",
    category: "Reversing",
    points: 250,
    difficulty: "Hard",
    description:
      "A JavaScript program builds the flag byte by byte with XOR. Read it, understand it, and recover the flag by hand (or just run it).",
    link: "challenges/rev1.html",
    hint: "XOR is reversible: if cipher = plain ^ key, then plain = cipher ^ key. DevTools console is your friend.",
    hash: "38f1215faff981b2ff2306edd2099bf74800d3df7168b87685bb92a2bdbf069b", // CTF{r3v3rs3_th3_x0r}
  },
];
