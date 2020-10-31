#!/bin/sh

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"  \
  --data '{
    "game":{
      "cell":{
          "index": "'"${INDEX}"'",
          "value": "'"${value}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
