#!/bin/bash

rm ./emojione.json
ls ./src/emoji-menu/emoji.js
curl https://raw.githubusercontent.com/emojione/emojione/master/emoji.json > emojione.json
node parse-emoji.js > src/emoji-menu/emoji.js
node_modules/.bin/prettier src/emoji-menu/emoji.js --write --single-quote
echo Downloaded and parsed emojione.json!
