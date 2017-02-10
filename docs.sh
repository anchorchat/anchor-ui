#!/bin/bash

rm -rf components
cp -r src components
rm -rf components/icons components/internal components/with-theme components/style components/settings
rm components/index.js components/url-regex.js
npm run docs
rm -rf components
