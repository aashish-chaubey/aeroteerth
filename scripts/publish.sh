#!/usr/bin/env bash

set -euo pipefail

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Run this script from inside the git repository."
  exit 1
fi

branch="$(git branch --show-current)"

if [[ "${branch}" != "main" ]]; then
  echo "Current branch is '${branch}'. Switch to 'main' before publishing."
  exit 1
fi

if [[ $# -gt 0 ]]; then
  commit_message="$*"
else
  commit_message="Update site"
fi

git add -A

if git diff --cached --quiet; then
  echo "No staged changes to publish."
  exit 0
fi

git commit -m "${commit_message}"
git push origin main

echo "Published to origin/main. GitHub Pages will deploy automatically."
