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

  /* =============== BATCH 2 (50 new) =============== */
  {
    id: "crypto8", title: "Mirror Mirror", category: "Crypto", points: 100, difficulty: "Easy",
    description: "The oldest monoalphabetic trick: the alphabet folded in half. A becomes Z, B becomes Y...",
    link: "challenges/crypto8.html",
    hint: "Atbash cipher. 'X' decodes to 'C', 'g' to 't'.",
    hash: "5e5a323bb9fe4220a69d3713c323bfa10b470c1ba02a5de6cdecd7fd1648d1b4", // CTF{4tb4sh_m1rr0r}
  },
  {
    id: "crypto9", title: "Thirty-Two", category: "Crypto", points: 150, difficulty: "Medium",
    description: "Not 64 — this alphabet only uses A-Z and 2-7, padding with equals signs.",
    link: "challenges/crypto9.html",
    hint: "Base32. The `=====` padding and limited alphabet are the tell.",
    hash: "84681d79fb0c114ac46965f5efccc82310a08cef237466a04146657e4c352dfc", // CTF{b4s3_32_1s_c00l}
  },
  {
    id: "crypto10", title: "No Confusing Letters", category: "Crypto", points: 200, difficulty: "Medium",
    description: "An encoding that drops 0, O, I and l so humans never misread it...",
    link: "challenges/crypto10.html",
    hint: "Base58, Bitcoin's favorite alphabet.",
    hash: "7d7e92c57d615edb07b73144ca84656a85a297be48dc4a970bcb8d70bac981ba", // CTF{b4s3_58_s4f3_4lph4b3t}
  },
  {
    id: "crypto11", title: "Eight Bits? No, Base Eight", category: "Crypto", points: 150, difficulty: "Medium",
    description: "These numbers look small because they're octal — base 8, the unix permission system.",
    link: "challenges/crypto11.html",
    hint: "chr(int(tok, 8)) for each space-separated group.",
    hash: "c5153321d0eed9cb15ae8439e3bcf02d7c0d0fa36229cfa9c635094ffe27ea09", // CTF{0ct4l_4sc11}
  },
  {
    id: "crypto12", title: "Backwards and Base-wards", category: "Crypto", points: 150, difficulty: "Medium",
    description: "Base64 won't be enough — the author also flipped the string first. Decode, then flip.",
    link: "challenges/crypto12.html",
    hint: "After base64 -d, the text reads backwards. rev it.",
    hash: "cedabf8d630ddcef1bd45ec1d2935eec14618d5d6ae623b54c0b129fa9cde548", // CTF{r3v3rs3d_b4s364}
  },
  {
    id: "crypto13", title: "Percent Signs Everywhere", category: "Crypto", points: 100, difficulty: "Easy",
    description: "URLs can't hold every character, so browsers sneak them in as % followed by hex.",
    link: "challenges/crypto13.html",
    hint: "URL encoding. unquote() or CyberChef 'URL Decode'.",
    hash: "ac02ce392b8da4fd98c966dacc6be3bd7ae8b30bf28969ab807f1b2b44ebe77e", // CTF{p3rc3nt_3nc0d1ng_g4ng}
  },
  {
    id: "crypto14", title: "Forty-Seven", category: "Crypto", points: 150, difficulty: "Medium",
    description: "ROT13's bigger sibling rotates 94 printable ASCII characters, not just letters.",
    link: "challenges/crypto14.html",
    hint: "ROT47. Symbols and digits moved too — dCode has a ROT47 tool.",
    hash: "715642d33e4f8301745202ff004351b66001d462dc3fca6d0eff068b6035a886", // CTF{r0t47_r0cks}
  },
  {
    id: "crypto15", title: "Just Numbers", category: "Crypto", points: 100, difficulty: "Easy",
    description: "Plain decimal ASCII codes, space separated. Computers were born knowing this cipher.",
    link: "challenges/crypto15.html",
    hint: "chr(n) for each decimal number.",
    hash: "a9a7340746d5b0c82a79439adb6ff25f97206364588511a1322b5dc0d5a9ad81", // CTF{d3c1m4l_c0d3}
  },
  {
    id: "crypto16", title: "One-Byte Stand", category: "Crypto", points: 200, difficulty: "Medium",
    description: "XOR with a single repeating byte key. There are only 255 possible keys — try them all.",
    link: "challenges/crypto16.html",
    hint: "You know flags start with 'C' — so key = first_byte XOR 0x43.",
    hash: "81e6aae6110a0c7ed544fc7e16d723a3209e0b57551f6b65e9170df18ccdebf7", // CTF{x0r_brut3_f0rc3}
  },
  {
    id: "crypto17", title: "Zig Zag", category: "Crypto", points: 250, difficulty: "Hard",
    description: "No substitution here — the letters were just rearranged, written along a 3-rail zigzag fence.",
    link: "challenges/crypto17.html",
    hint: "Rail Fence cipher, 3 rails. Write the cipher along the zigzag, read the rails.",
    hash: "7e1f42e2837a05188d094db0f6aa1c100a1784450fab9e0535901b498284a738", // CTF{r41l_f3nc3_z1gz4g}
  },
  {
    id: "web7", title: "Style and Secrets", category: "Web", points: 150, difficulty: "Medium",
    description: "This profile page loads an external stylesheet. Stylesheets are text files too — and devs leave notes in them.",
    link: "challenges/web7.html",
    hint: "DevTools → Sources → find the .css file this page loads. Read it.",
    hash: "aedf11b72d8bb3e7de9bd797742e8365757a696374a812e72c69518cf612dc21", // CTF{c4sc4d1ng_s3cr3ts}
  },
  {
    id: "web8", title: "Script Reader", category: "Web", points: 150, difficulty: "Medium",
    description: "Pages pull in JavaScript files. Everyone reads the HTML; few bother reading every linked script.",
    link: "challenges/web8.html",
    hint: "DevTools → Sources → the extra .js file. Read its comments.",
    hash: "6f180ff69722d21ff1fc0114c457893a31961fbe47bd8e653156447a01a20f29", // CTF{scr1pt_c0mm3nts}
  },
  {
    id: "web9", title: "Torn Apart", category: "Web", points: 200, difficulty: "Medium",
    description: "The flag was torn into three pieces and scattered as comments throughout this very page. Find all three.",
    link: "challenges/web9.html",
    hint: "Search the page source for 'part' — combine part1 + part2 + part3.",
    hash: "223f1465b156966c4a81bdfe0129d95960381bced1f04fd7bcbe4c8e6057493d", // CTF{spl1t_c0mm3nt5}
  },
  {
    id: "web10", title: "Ampersand Attack", category: "Web", points: 150, difficulty: "Medium",
    description: "Every character can be written as an HTML entity: &# plus its decimal code plus a semicolon.",
    link: "challenges/web10.html",
    hint: "Decode the entities to plain text. CyberChef 'From HTML Entity'.",
    hash: "00ec39f00dc4ab070b7854ebf1b3b3db181eb12d39fe2895269d76ed8707ec07", // CTF{3nt1ty_d3c0d3r}
  },
  {
    id: "web11", title: "The Unlisted Page", category: "Web", points: 150, difficulty: "Medium",
    description: "There is a page on this site that is linked from nowhere. It is named s3cr3t-p4g3-31337.html at the site root.",
    link: "challenges/web11.html",
    hint: "Type the filename straight into the address bar after the domain.",
    hash: "02e556670a5d0397609ebe8a047503d168bb62c405292be8c0a48ddc4ee16824", // CTF{gu3ss_th3_p4g3}
  },
  {
    id: "web12", title: "Browser Memory", category: "Web", points: 200, difficulty: "Medium",
    description: "This page saved something to your browser's localStorage when it loaded. It's not a cookie — it's bigger.",
    link: "challenges/web12.html",
    hint: "DevTools → Application → Local Storage, or localStorage in console.",
    hash: "4b4c5be64706ff27345db4adb767af3f84dc3babf70e41b27b027294edd7e7d8", // CTF{l0c4l_st0r4g3_l00t3d}
  },
  {
    id: "web13", title: "Follow the Map", category: "Web", points: 150, difficulty: "Medium",
    description: "Websites publish a file to tell search engines EVERY page that exists. It's like a table of contents for crawlers.",
    link: "challenges/web13.html",
    hint: "Read /sitemap.xml at the site root — one URL there looks... interesting.",
    hash: "8c2020ea137f305bd0195203ed8b1629d93d5be97229e8b831955e69844238ad", // CTF{s1t3m4p_tr34sur3_m4p}
  },
  {
    id: "web14", title: "Three-Piece Suit", category: "Web", points: 200, difficulty: "Medium",
    description: "The flag was split across three files at predictable paths. Download all three and stitch them.",
    link: "challenges/web14.html",
    hint: "assets/parts/part1.txt ... part2.txt ... part3.txt",
    hash: "063b1ee66ef0802db5e18e9cd9ce71f395dac1ce6e8663ad6704e42220801271", // CTF{thr33_p13c3s_t0g3th3r}
  },
  {
    id: "forensics5", title: "The Whole Enchilada", category: "Forensics", points: 100, difficulty: "Easy",
    description: "This entire file is base64. Not part of it — ALL of it. Decode everything.",
    link: "challenges/forensics5.html",
    hint: "base64 -d payload.b64",
    hash: "293e0401b5a84a23bf9e60bd26e5200acbfe79cf8f01dfdf5322a562f40ab17f", // CTF{d3c0d3_th3_wh0l3_f1l3}
  },
  {
    id: "forensics6", title: "Packet Peek", category: "Forensics", points: 200, difficulty: "Medium",
    description: "A 'packet capture' was exported as text: raw hex of each packet's payload. One packet carries the exfiltrated flag.",
    link: "challenges/forensics6.html",
    hint: "Collect PACKET 40's hex lines -> xxd -r -p (or bytes.fromhex).",
    hash: "4b51a7c5de20c0b3a9341a9dd4d229aaea28ee7432085bd2ceaae84b56140628", // CTF{p4ck3t_c4ptur3_sn1ff3d}
  },
  {
    id: "forensics7", title: "Zip It", category: "Forensics", points: 100, difficulty: "Easy",
    description: "A compressed archive. Decompress it. That is literally it.",
    link: "challenges/forensics7.html",
    hint: "unzip stash.zip",
    hash: "035eb953e5ffa557a70955967a2e329b135c3f3c6466cc8aeea5658956347eba", // CTF{z1p_z1p_h00r4y}
  },
  {
    id: "forensics8", title: "Matryoshka Archive", category: "Forensics", points: 150, difficulty: "Medium",
    description: "A tar.gz inside a tar inside a tar.gz... okay, just two layers. Nested packing, like a Russian doll.",
    link: "challenges/forensics8.html",
    hint: "tar xzf bundle.tar.gzpose gives inner.tar — extract THAT too.",
    hash: "b34483481f8a554cf389cf7331d5bd6efb1f327f308d9df63fb3277fe3e1bacd", // CTF{d0ubl3_p4ck3d_t4r}
  },
  {
    id: "forensics9", title: "Office Secrets", category: "Forensics", points: 200, difficulty: "Medium",
    description: "Modern Office documents aren't magic binaries — .docx, .xlsx and .pptx are just ZIP archives full of XML.",
    link: "challenges/forensics9.html",
    hint: "unzip report.docx -d out && grep -ri ctf out/",
    hash: "66d8cf3b43140e3f183901856b2b1433253247f3517fce37af1e496c5a186f81", // CTF{d0cx_1s_4_z1p}
  },
  {
    id: "forensics10", title: "PDF Excavation", category: "Forensics", points: 150, difficulty: "Medium",
    description: "PDFs are mostly readable text with formatting sprinkled in. Don't open it in a viewer — READ the file.",
    link: "challenges/forensics10.html",
    hint: "strings notes.pdf | grep flag",
    hash: "35b530788280edd7ade47a53eb00cf91c8377d578a3aef7cef8ed7ff3046d57a", // CTF{p0rt4bl3_d0cum3nt}
  },
  {
    id: "forensics11", title: "Memory Lane", category: "Forensics", points: 150, difficulty: "Medium",
    description: "A 200KB memory dump from a crashed process. Somewhere in the binary noise sits readable text — the flag.",
    link: "challenges/forensics11.html",
    hint: "strings memdump.bin | grep CTF",
    hash: "c881eac7f24d030cd385fcf1089645f87d9afab9a60143f56066521681c4c20c", // CTF{m3m0ry_dump_str1ngs}
  },
  {
    id: "forensics12", title: "JSON Deep Dive", category: "Forensics", points: 200, difficulty: "Medium",
    description: "400+ JSON log events. One has an unusual 'note' field nobody bothers reading. It's not plain text, either.",
    link: "challenges/forensics12.html",
    hint: "jq '.\[\] | select(.note)' events.json — then decode what you find.",
    hash: "ea391b1369b406a785369d45aca9c3524830cd8128490c4b5411544881a21599", // CTF{js0n_l0gs_h1d3_th1ngs}
  },
  {
    id: "stego3", title: "Mixed Feelings", category: "Stego", points: 250, difficulty: "Hard",
    description: "The capitalization in this text is 'wrong' — randomly shouting letters. Except it's not random: uppercase = 1, lowercase = 0.",
    link: "challenges/stego3.html",
    hint: "Take the case of every letter (ignore spaces) as bits → 8 bits per char → ASCII. Flag is 22 chars / 176 bits.",
    hash: "2580ea9ea623ba0accf30ebbb0477fc2ee15e13165ae2c04ec0de6f99ba9350c", // CTF{c4s3_p4tt3rn_b1ts}
  },
  {
    id: "stego4", title: "Every Fourth Word", category: "Stego", points: 200, difficulty: "Medium",
    description: "Poetic filler. Count the words. Every FOURTH word starts with a letter that matters.",
    link: "challenges/stego4.html",
    hint: "words\[3\], words\[7\], words\[11\]... first letters, in order.",
    hash: "f2d3ce69977c3ec73612891f468bbfa640a62b572e06260b435a1359d0d593e7", // CTF{f0urth_w0rd_m4g1c}
  },
  {
    id: "stego5", title: "Fifty Shades of Flag", category: "Stego", points: 250, difficulty: "Hard",
    description: "A design team's color palette CSS. The FIRST byte of every #rrggbb color is... suspiciously sequential.",
    link: "challenges/stego5.html",
    hint: "Take #XXyyyy of each rule in order → XX hex → ASCII.",
    hash: "9abb13df669bfe388d6ec9cd75f972a209d7f63d082fc3ec5d194feef9afded1", // CTF{h3x_c0l0r_c0d35}
  },
  {
    id: "stego6", title: "Through the Looking Glass", category: "Stego", points: 150, difficulty: "Medium",
    description: "This message was written backwards — every single character, right to left, like it's meant for a mirror.",
    link: "challenges/stego6.html",
    hint: "rev mirror.txt (or python s\[::-1\])",
    hash: "b0eca36e29b13e2a6ac74e5af04006897b063a2fa0580368cb4d0ddf5501c853", // CTF{m1rr0r_1m4g3}
  },
  {
    id: "stego7", title: "Every Third Letter", category: "Stego", points: 200, difficulty: "Medium",
    description: "A long junk string. Starting from the third character, every 3rd character spells the message.",
    link: "challenges/stego7.html",
    hint: "s\[2::3\] in python.",
    hash: "dd79e929e8de1151bb21dcda8efd9e7f7686e83e2198e0cef308c9557933f057", // CTF{sk1p_4nd_jump}
  },
  {
    id: "stego8", title: "Zero-Point Font", category: "Stego", points: 200, difficulty: "Medium",
    description: "The flag is on this page right now — rendered at literally 0 pixels tall. Your browser knows, your eyes don't.",
    link: "challenges/stego8.html",
    hint: "DevTools → select-all on the page, or view-source and grep for font-size:0",
    hash: "c2dd0f1c2c8a7c076e18cf954a483922d107ea2173a7f34404ed48680d74fb42", // CTF{1nv1s1bl3_sp4n5}
  },
  {
    id: "rev4", title: "atob Said the Clown", category: "Reversing", points: 150, difficulty: "Medium",
    description: "JavaScript's atob() decodes base64. The malware author thought it was 'unbreakable obfuscation'.",
    link: "challenges/rev4.html",
    hint: "atob('...') in a console, or any base64 decoder.",
    hash: "1af4bb58f479dbcb5110b8b67386959490b678ab3d488844d6f8ea8ded84108b", // CTF{4t0b_0bfusc4t10n}
  },
  {
    id: "rev5", title: "Layer Cake", category: "Reversing", points: 200, difficulty: "Medium",
    description: "One atob wasn't enough paranoia — this loader decodes twice. Peel both layers.",
    link: "challenges/rev5.html",
    hint: "atob(atob(...)) — decode twice.",
    hash: "a724f8a219e5d9aec6377c503cbdbb65ee6e449ddefec3df0b00717aec28d7f3", // CTF{d0ubl3_4t0b_l4y3r5}
  },
  {
    id: "rev6", title: "Minus Thirteen", category: "Reversing", points: 150, difficulty: "Medium",
    description: "The decoder subtracts 13 from every character code before displaying. So the stored array is the flag MINUS 13.",
    link: "challenges/rev6.html",
    hint: "Add 13 to every stored number, then chr() them.",
    hash: "bde71fb39cc86abc0bcecf75951c3db7469456fd4dd33dab979727a43c33cf3c", // CTF{d3cr3m3nt_m4g1c}
  },
  {
    id: "rev7", title: "Flip the Array", category: "Reversing", points: 150, difficulty: "Medium",
    description: "The program stores the flag backwards in a character array and reverses it at runtime.",
    link: "challenges/rev7.html",
    hint: "reverse the array, join, done.",
    hash: "09949a84f2296d3ee25ec22375d85a8c882445b4984d1358ed7be2385f442f58", // CTF{4rr4y_r3v3rs3d}
  },
  {
    id: "rev8", title: "Walking Cipher", category: "Reversing", points: 250, difficulty: "Hard",
    description: "A homemade cipher: each letter shifted by its position. Position 0 shifted by 0, position 1 by 1, position 20 by 20...",
    link: "challenges/rev8.html",
    hint: "Subtract i from the i-th character of the ciphertext.",
    hash: "d76882df11490e898169736d89b66865bef0c3ba330c4de1ede2feb2954dc301", // CTF{1nd3x_k3y_c1ph3r}
  },
  {
    id: "rev9", title: "Off By One", category: "Reversing", points: 150, difficulty: "Medium",
    description: "A classic bug turned 'feature': every stored hex value is ONE MORE than the real character.",
    link: "challenges/rev9.html",
    hint: "hex array -> numbers -> subtract 1 -> chr().",
    hash: "d41a1541840545eb8148d8543cbba44b7c6d87c844cfa258a4fc2627f9749d40", // CTF{0ff_by_0n3_4cc1d3nt}
  },
  {
    id: "osint3", title: "Loose Lips Write Commits", category: "OSINT", points: 200, difficulty: "Medium",
    description: "A developer typed a flag straight into a git COMMIT MESSAGE. Commit messages are public forever.",
    link: "challenges/osint3.html",
    hint: "Skim the commit history on GitHub — one message is... too chatty.\['allow-empty'\]",
    hash: "f4287056fe6d3136049490693423c52eb5e3b5aca313bcad52586728cf2876f1", // CTF{c0mm1t_m3ss4g3_l34k}
  },
  {
    id: "osint4", title: "Tagged and Bagged", category: "OSINT", points: 200, difficulty: "Medium",
    description: "Someone pushed an annotated git TAG with release notes containing a flag. Tags are listed on the repo's releases page.",
    link: "challenges/osint4.html",
    hint: "Repo → Tags / Releases. Or: git fetch --tags && git show v1.0-release",
    hash: "0f48d4def5164e2cd468ef5b1332b3ac172348ed56f31e0a7840fc53ac9df6de", // CTF{4nn0t4t3d_t4g}
  },
  {
    id: "osint5", title: "The Raw Truth", category: "OSINT", points: 200, difficulty: "Medium",
    description: "This site's README renders beautifully on the repo page. But rendered markdown HIDES html comments. View the RAW file.",
    link: "challenges/osint5.html",
    hint: "github.com/ad7rv/ctf-platform → README.md → view 'Raw' (or the raw.githubusercontent URL).",
    hash: "3d77682a8b96d584d8a77c6333b9df4c2fc255b01b1ab6c12a8336df43885c66", // CTF{r4w_r34dm3_c0mm3nt}
  },
  {
    id: "osint6", title: "Loose Lips, Loud Filenames", category: "OSINT", points: 150, difficulty: "Medium",
    description: "A dev named a FILE with the flag itself. Browse the repo's file tree and read the filenames carefully.",
    link: "challenges/osint6.html",
    hint: "The secrets/ folder lives... somewhere with a very chatty filename.",
    hash: "e8d5607cd67f9db133fb04219aaf0826270571733b52f35e72f7e27c1ed10b59", // CTF{f1l3n4m3s_c4n_l34k}
  },
  {
    id: "prog3", title: "Factorial Digits", category: "Programming", points: 150, difficulty: "Medium",
    description: "Compute 50! (50 factorial), then sum ALL of its decimal digits. Flag is CTF{that_sum}.",
    link: "challenges/prog3.html",
    hint: "Python handles big ints natively: sum(map(int, str(math.factorial(50))))",
    hash: "d556163d18749a288a38d932f250eaafeb61bd3795aa5ac80cd08d53b45ac162", // CTF{216}
  },
  {
    id: "prog4", title: "Vowel Movement", category: "Programming", points: 150, difficulty: "Medium",
    description: "How many vowels (a,e,i,o,u) appear in the whole chant.txt file? Flag is CTF{total}.",
    link: "challenges/prog4.html",
    hint: "tr -cd 'aeiou' < chant.txt | wc -c",
    hash: "4b9cb5bb7ad7042686622583e395f1ea970ead921e008901ab491ebedbe4cbbf", // CTF{2000}
  },
  {
    id: "prog5", title: "Fibonacci's 40th", category: "Programming", points: 150, difficulty: "Medium",
    description: "Compute the 40th Fibonacci number (with F(0)=0, F(1)=1). Flag is CTF{F(40)}.",
    link: "challenges/prog5.html",
    hint: "Recursion without memoization will hurt. Loop it.",
    hash: "8399a7d7b548f3fda3f4ef4f459b10f79fd676659e8db0a7dcada76a8e4a4854", // CTF{102334155}
  },
  {
    id: "prog6", title: "Longest in Show", category: "Programming", points: 150, difficulty: "Medium",
    description: "A list of 3001 words. Find the LONGEST word. Flag is CTF{that_word}.",
    link: "challenges/prog6.html",
    hint: "awk '{print length, $0}' words.txt | sort -n | tail -1",
    hash: "22e746f3bccafc3e5f2345f7a4d8141d27f7372f87286e739c8e698ebd8c7d5e", // CTF{supercalifragilisticexpialidocious}
  },
  {
    id: "prog7", title: "XOR Mathematics", category: "Programming", points: 200, difficulty: "Medium",
    description: "XOR these two hex strings together byte-by-byte. The result is readable ASCII.",
    link: "challenges/prog7.html",
    hint: "bytes(a^b for a,b in zip(bytes.fromhex(h1), bytes.fromhex(h2)))",
    hash: "bfc7b9785d459b766dd98e963cd4256e8bf365566adea9f6e590fd7d6ac79be5", // CTF{x0r_h3x_m4th}
  },
  {
    id: "prog8", title: "Name That Shift", category: "Programming", points: 150, difficulty: "Medium",
    description: "A Caesar-encrypted word. You KNOW the plaintext. How many positions was it shifted? Flag is CTF{shift_N}.",
    link: "challenges/prog8.html",
    hint: "Compare first letters: t → c? t(19) to c(2)... try both directions.",
    hash: "dc22e5b00249c5687de4aef94cfdc2bacab6fcc5b320ae0b789910afc2af32bf", // CTF{shift_9}
  },
  {
    id: "prog9", title: "Triple Vowel Patrol", category: "Programming", points: 200, difficulty: "Medium",
    description: "How many lines in gibberish.txt contain THREE OR MORE consecutive vowels (aeiou in a row)? Flag: CTF{count}.",
    link: "challenges/prog9.html",
    hint: "grep -cE '\[aeiou\]{3}' gibberish.txt",
    hash: "500f81937afcbf811b54ef1756280037f71964a29cbbf74ffcc9b0113fae12b3", // CTF{287}
  },
  {
    id: "prog10", title: "Hash Slinging Slasher", category: "Programming", points: 150, difficulty: "Medium",
    description: "Compute the MD5 hash of the password 'hunter2'. The flag is the FIRST 8 hex characters: CTF{first8}.",
    link: "challenges/prog10.html",
    hint: "echo -n hunter2 | md5sum",
    hash: "e1aa8697e6fd7bdb0d7872be79cea1af61887d8d128936e358b253d2fae0233f", // CTF{2ab96390}
  },
];
