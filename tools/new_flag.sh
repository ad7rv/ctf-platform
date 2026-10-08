#!/usr/bin/env bash
# ============================================================
# new_flag.sh — generate the SHA-256 hash for a new flag.
#
# Usage:
#   bash tools/new_flag.sh "CTF{your_new_flag_here}"
#
# Then paste the printed hash into js/challenges.js for the
# matching challenge, replacing its old "hash" value.
# ============================================================

if [ -z "$1" ]; then
  echo "Usage: bash tools/new_flag.sh \"CTF{your_new_flag_here}\""
  exit 1
fi

FLAG="$1"
HASH=$(printf '%s' "$FLAG" | sha256sum | awk '{print $1}')

echo ""
echo "  Flag : $FLAG"
echo "  Hash : $HASH"
echo ""
echo "Paste into js/challenges.js:"
echo ""
echo "    hash: \"$HASH\", // $FLAG"
echo ""
