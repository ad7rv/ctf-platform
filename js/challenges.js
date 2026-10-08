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
  /* =============== WEB =============== */
  {
    id: "web1", title: "Source Code Secrets", category: "Web", points: 100, difficulty: "Easy",
    description: "A developer left something behind on this page. Developers love leaving notes to themselves. Can you find it?",
    link: "challenges/web1.html",
    hint: "Right-click → View Page Source. Browsers render HTML, but humans can read it all.",
    hash: "540cae84bc7695a09b211c8337b5b53a8c5db89c7c050e2c1faaceefa5956f81", // CTF{v13w_s0urce_pr0}
  },
  {
    id: "web6", title: "Read-Only", category: "Web", points: 100, difficulty: "Easy",
    description: "This form field is 'locked' and refuses to give up its value. HTML attributes are a browser suggestion, not a lock.",
    link: "challenges/web6.html",
    hint: "DevTools → Elements → delete the 'disabled' attribute, or document.querySelector('input').removeAttribute('disabled')",
    hash: "05c16c90a5814f904f198c0949cf29d544665b7057c1e28ba7a3cc8c027d690e", // CTF{d3v_t00ls_3n4bl3_m3}
  },
  {
    id: "web2", title: "Cookie Monster", category: "Web", points: 150, difficulty: "Medium",
    description: "This page is baking something delicious. Check what your browser stored after visiting it.",
    link: "challenges/web2.html",
    hint: "DevTools → Application → Cookies, or type document.cookie in the console.",
    hash: "2f03c7b9e101faddf0f848725cb523fefe199c5151f63dbe5eecb1266857636f", // CTF{c00k13_m0nst3r_4t3_th3_fl4g}
  },
  {
    id: "web3", title: "Header Hunter", category: "Web", points: 150, difficulty: "Medium",
    description: "The part of a web page nobody reads hides metadata. This page's head has big mouth.",
    link: "challenges/web3.html",
    hint: "View the page source and look at the <head> section — check the meta tags.",
    hash: "f9dabce1535b7237ee6d5b6355955aee121f11f221b38a2f0b05529c579b6d5e", // CTF{m3t4_t4gs_t3ll_tal3s}
  },
  {
    id: "web5", title: "Directory Digger", category: "Web", points: 150, difficulty: "Medium",
    description: "A careless admin uploaded a config backup somewhere on this site with no link to it. Guess your way in.",
    link: "challenges/web5.html",
    hint: "Try /backup/config.bak.txt — or run gobuster/feroxbuster with a common wordlist.",
    hash: "4b032d52f5c53f02ebd58fa1fb2b35b123138256947bad0fd69076a67b8b016b", // CTF{h1dd3n_d1r3ct0ry_l00ting}
  },
  {
    id: "web4", title: "Admin Login", category: "Web", points: 200, difficulty: "Medium",
    description: "A login form that helpfully shows you its SQL query. Log in without a password by bending the query itself.",
    link: "challenges/web4.html",
    hint: "Make the WHERE clause always true and comment out the rest: ' OR 1=1 --",
    hash: "5e9aac4a974501756817410ce0412396f6e80e81339598f0d74cb8bf222c11b4", // CTF{0r_1_eq_1_byp4ss}
  },

  /* =============== CRYPTO =============== */
  {
    id: "crypto1", title: "Caesar's Favorite Salad", category: "Crypto", points: 100, difficulty: "Easy",
    description: "Julius loved shifting letters around. This message looks rotated. Un-rotate it 13 places to taste the flag.",
    link: "challenges/crypto1.html",
    hint: "ROT13. Try `tr 'A-Za-z' 'N-ZA-Mn-za-m'` or an online ROT13 decoder.",
    hash: "f23c136d641a25297eaba1248f45755a032fe4dd2426a9c98773c25136f8df94", // CTF{r0t13_1snt_crypt0}
  },
  {
    id: "crypto3", title: "Hex Me", category: "Crypto", points: 100, difficulty: "Easy",
    description: "A string of hexadecimal from a memory dump. Every two characters is one byte of ASCII.",
    link: "challenges/crypto3.html",
    hint: "xxd -r -p, bytes.fromhex(), or CyberChef 'From Hex'.",
    hash: "392003007b91f05fe7859576c3e5452c0ddeef762841fae47d614ba20b58ae7b", // CTF{h3x4d3c1m4l_fun}
  },
  {
    id: "crypto4", title: "Binary Talk", category: "Crypto", points: 100, difficulty: "Easy",
    description: "A robot speaks in 0s and 1s. Eight bits at a time, it's just ASCII.",
    link: "challenges/crypto4.html",
    hint: "chr(int(b,2)) for each space-separated byte.",
    hash: "1f648ac6d568124f8dad83bf0ac48afd37afa741b71f35a49696f5acc8079a42", // CTF{b1n4ry_1s_b4s3_2}
  },
  {
    id: "crypto6", title: "Dit Dah", category: "Crypto", points: 100, difficulty: "Easy",
    description: "An old-school radio transmission: dots and dashes. Decode the Morse.",
    link: "challenges/crypto6.html",
    hint: "Any Morse translator. The braces and underscores are not encoded. Morse is caseless → decoded text is ALL CAPS.",
    hash: "a4e196558be97cc6f8e3e3bea7f36cb36b10e54dde8b65b9dd499100229cc8b3", // CTF{D1T_D4H_D1T}
  },
  {
    id: "crypto2", title: "Base(ic) Instinct", category: "Crypto", points: 150, difficulty: "Easy",
    description: "Encoding is not encryption. This blob has been base64-encoded... maybe more than once. Decode your way to the flag.",
    link: "challenges/crypto2.html",
    hint: "Run `base64 -d` repeatedly until you see CTF{ ... }",
    hash: "56989c5899b08c5672c6354a11af68fe3a8b46478540ea8998c70dfe7b38e797", // CTF{b4s364_1s_n0t_s3cur3}
  },
  {
    id: "crypto5", title: "Lucky Seven", category: "Crypto", points: 150, difficulty: "Medium",
    description: "A Caesar cipher with an unknown shift. Brute-force 25 shifts, or trust the sender's superstition.",
    link: "challenges/crypto5.html",
    hint: "The shift equals a slot-machine's luckiest number.",
    hash: "0075fe1ff448b80c04bcc90bc686a04e4e79fdd2609863923fad9b91a999ce50", // CTF{sh1ft_s3v3n_up}
  },
  {
    id: "crypto7", title: "The Lemon Cipher", category: "Crypto", points: 200, difficulty: "Medium",
    description: "Vigenère cipher with a 5-letter keyword scribbled on the notepad: the sender's favorite sour fruit.",
    link: "challenges/crypto7.html",
    hint: "CyberChef 'Vigenère Decode' with key LEMON (A=0 shifts).",
    hash: "71477b0cb767edb51510e34994cf21a118aac9c79f8cf1a062d4727bbb03bd71", // CTF{v1g3n3r3_c1ph3r}
  },

  /* =============== FORENSICS =============== */
  {
    id: "forensics1", title: "Hidden in Plain Sight", category: "Forensics", points: 200, difficulty: "Medium",
    description: "This image looks perfectly normal. But files don't always end where viewers think they do. Something was appended after the end of the image data.",
    link: "challenges/forensics1.html",
    hint: "Try `strings` or a hex editor and scroll to the very end, past IEND.",
    hash: "5caf22b4a436572a97da1d162aa639d338867a4366d6ba7d06b1b3ba24f258d3", // CTF{m4g1c_byt3s_4nd_tr41l3rs}
  },
  {
    id: "forensics3", title: "Wrong Label", category: "Forensics", points: 150, difficulty: "Medium",
    description: "A file named evidence.dat refuses to open in anything. Its extension is a lie — ask the magic bytes what it really is.",
    link: "challenges/forensics3.html",
    hint: "`file evidence.dat` tells the truth. Decompress accordingly.",
    hash: "f8f6cd5cf9c0b92a557b50112039662add855343f96c085d7a65ebaf6b3a047d", // CTF{1ts_gz1p_n0t_d4t}
  },
  {
    id: "forensics4", title: "Needle in the Logstack", category: "Forensics", points: 150, difficulty: "Medium",
    description: "3,061 log lines. One real flag, sixty decoys. Your shell skills vs. the haystack.",
    link: "challenges/forensics4.html",
    hint: "grep is your best friend. The real flag was written as an 'admin note' about 'prod'.",
    hash: "5fec7da1078a94aaf0365ed701b351b827cd632ca3c9e2a7442fbc91d6cdd4e1", // CTF{gr3p_1s_y0ur_b3st_fr13nd}
  },
  {
    id: "forensics2", title: "Metadata Matters", category: "Forensics", points: 200, difficulty: "Medium",
    description: "A 1×1 pixel photo. The pixels are boring; the metadata is not. PNGs can carry free-form text chunks.",
    link: "challenges/forensics2.html",
    hint: "strings it, or exiftool / pngcheck -t to read the tEXt chunk.",
    hash: "de2d80a55f931be95b4108365c547ad5672b60dee2865e2ca7d3d73d0cae613a", // CTF{p14int3xt_chunk_f0und}
  },

  /* =============== STEGO =============== */
  {
    id: "stego1", title: "Last Words", category: "Stego", points: 200, difficulty: "Medium",
    description: "A meaningless diary export. The message isn't in the words — it's at the end of every line.",
    link: "challenges/stego1.html",
    hint: "Take the last character of each poem line, top to bottom.",
    hash: "a5518f4b01c1e5b715059a327f7da9e5983a4e82d40e76d077ed9ab516a7dd9c", // CTF{l4st_l3tt3rs_sp34k}
  },
  {
    id: "stego2", title: "The Invisible Ink", category: "Stego", points: 250, difficulty: "Hard",
    description: "A note whose letters are separated by characters that render as nothing at all. Make the invisible visible.",
    link: "challenges/stego2.html",
    hint: "python3 -c \"print(repr(open('note.txt').read()))\" — then filter out U+200B.",
    hash: "f141a4287a4051b4dfa570a8c18b57fde9707b8ac7ebdd3410eafa2850c41991", // CTF{z3r0_w1dth_1nv1s1bl3}
  },

  /* =============== REVERSING =============== */
  {
    id: "rev1", title: "Reverse the XOR", category: "Reversing", points: 250, difficulty: "Hard",
    description: "A JavaScript program builds the flag byte by byte with XOR. Read it, understand it, and recover the flag by hand (or just run it).",
    link: "challenges/rev1.html",
    hint: "XOR is reversible: cipher ^ mask = original. DevTools console is your friend.",
    hash: "38f1215faff981b2ff2306edd2099bf74800d3df7168b87685bb92a2bdbf069b", // CTF{r3v3rs3_th3_x0r}
  },
  {
    id: "rev3", title: "The Beacon", category: "Reversing", points: 150, difficulty: "Medium",
    description: "Malware builds its callback string from raw ASCII codes so it never appears as text. Decode the array.",
    link: "challenges/rev3.html",
    hint: "String.fromCharCode(...codes) — or ''.join(map(chr, codes)) in Python.",
    hash: "009c7abf82bd0d47146df06a850b69a2cbc6cb02b289929bfac404cccbd258a5", // CTF{fr0m_ch4rc0d3s_w1th_l0v3}
  },
  {
    id: "rev2", title: "Crack the Check", category: "Reversing", points: 200, difficulty: "Medium",
    description: "A license validator compares your input character-by-character against pieces scattered in code. Assemble them.",
    link: "challenges/rev2.html",
    hint: "Join the array pieces; decode String.fromCharCode(99, 104, 52, 114).",
    hash: "98f81cf8e160c13b2c74dabaa0ca3c7d22b5d9669ca0b504dde209a40486acdc", // CTF{ch4r_by_ch4r_ch3ck}
  },

  /* =============== MISC =============== */
  {
    id: "misc1", title: "Ask the Robots", category: "Misc", points: 150, difficulty: "Medium",
    description: "Webmasters tell search-engine robots where NOT to go. Sometimes that file is a treasure map.",
    link: "challenges/misc1.html",
    hint: "Every website has a /robots.txt. Go read ours.",
    hash: "274afc12c95fecd56dcac07aade462b26e6df00dc668d7711a0cc6a75a1ade09", // CTF{r0b0ts_kn0w_s3cr3ts}
  },

  /* =============== OSINT =============== */
  {
    id: "osint1", title: "The Internet Never Forgets", category: "OSINT", points: 200, difficulty: "Medium",
    description: "The site developer committed a leaked backup file to the public source repo, then deleted it in panic. git never forgets.",
    link: "challenges/osint1.html",
    hint: "github.com/ad7rv/ctf-platform → commit history → look for a 'remove leaked file' commit.",
    hash: "7bd5e299b0712cfbab5eba2ef1b961c34f5c35af7b710d2c309303aa9eed17c5", // CTF{g1t_n3v3r_f0rg3ts}
  },
  {
    id: "osint2", title: "Branch Out", category: "OSINT", points: 200, difficulty: "Medium",
    description: "Everyone stares at the main branch. The repo hides another branch carrying the flag.",
    link: "challenges/osint2.html",
    hint: "On GitHub, click the 'main' branch dropdown. Or git clone and git branch -a.",
    hash: "b3aaa56c8985bec95aa51bfd772f0cefb9eded1f106fe9ca0916bb009bfd1ab0", // CTF{br4nch_0ut_4nd_f1nd}
  },

  /* =============== PROGRAMMING =============== */
  {
    id: "prog1", title: "Sum of Primes", category: "Programming", points: 150, difficulty: "Medium",
    description: "Nothing to hide — just compute: the sum of all primes below 1000. Wrap the number in CTF{...}.",
    link: "challenges/prog1.html",
    hint: "A tiny sieve in Python. Sanity check: primes below 10 sum to 17.",
    hash: "be196eaa1da37456e39c50118bec8cea69c9d2623b59fb1e1e63831c89aeb309", // CTF{76127}
  },
  {
    id: "prog2", title: "Count the Needles", category: "Programming", points: 150, difficulty: "Medium",
    description: "4,000 random lines. Exactly how many contain the word 'needle'? Precision required.",
    link: "challenges/prog2.html",
    hint: "grep needle haystack.txt | wc -l",
    hash: "17e045b9bb55107cb0bf3a0ab15d0e714989975cd439775ce96ee43bd33e14db", // CTF{513}
  },
];
