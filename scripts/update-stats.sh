#!/usr/bin/env bash
# genera data/stats.json con las cifras de github que lee el portafolio:
# contribuciones de los últimos 12 meses y pull requests enviados a repos de otros.
# necesita gh y jq. en la action usa GITHUB_TOKEN; con un secreto STATS_TOKEN (pat) también cuenta lo privado.
set -euo pipefail
cd "$(dirname "$0")/.."

LOGIN="${1:-kisnner26}"
OUT="data/stats.json"
TMP="$(mktemp)"
mkdir -p data

CONTRIB=$(gh api graphql -f login="$LOGIN" -f query='
query($login:String!){ user(login:$login){ contributionsCollection{ contributionCalendar{ totalContributions } } } }' \
  --jq '.data.user.contributionsCollection.contributionCalendar.totalContributions')

gh api graphql -f q="author:$LOGIN type:pr -user:$LOGIN" -f query='
query($q:String!){ search(query:$q, type:ISSUE, first:100){ issueCount nodes{ ... on PullRequest{
  title number url state merged createdAt repository{ name owner{ login } } } } } }' > "$TMP"

jq --argjson contrib "$CONTRIB" --arg login "$LOGIN" --arg updated "$(date -u +%F)" '
  [ .data.search.nodes[] | select(. != null and .number != null) | {
      repo: .repository.name, owner: .repository.owner.login, title: .title, number: .number, url: .url,
      status: (if .merged then "merged" elif .state == "OPEN" then "open" else "closed" end), createdAt: .createdAt } ]
  | sort_by(.createdAt) | reverse as $items
  | { updated: $updated, login: $login, contributions: $contrib,
      prs: { total: ($items | length),
             merged: ($items | map(select(.status == "merged")) | length),
             open: ($items | map(select(.status == "open")) | length),
             closed: ($items | map(select(.status == "closed")) | length),
             owners: ($items | group_by(.owner) | sort_by(-length) | map(.[0].owner)),
             items: $items } }' "$TMP" > "$TMP.json"

# solo se reescribe si cambió algo además de la fecha, para no llenar el historial de commits
if [ -f "$OUT" ] && [ "$(jq -S 'del(.updated)' "$OUT")" = "$(jq -S 'del(.updated)' "$TMP.json")" ]; then
  echo "sin cambios"
else
  mv "$TMP.json" "$OUT"
  echo "actualizado: $(jq -c '{contributions, prs: (.prs | {total, merged, open, closed})}' "$OUT")"
fi
rm -f "$TMP" "$TMP.json"
