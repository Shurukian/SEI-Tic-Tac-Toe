#!/bin/sh

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo

# Use curl-script
# TOKEN="ID-NUMBER-HERE" sh curl-scripts/games/index.sh
