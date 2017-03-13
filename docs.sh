#!/bin/bash

rm -rf components
cp -r src components
rm -rf components/internal components/style components/settings
rm components/icons/index.js
rm components/index.js components/url-regex.js
npm run docs
rm -rf components
