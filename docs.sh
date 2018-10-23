#!/bin/bash

rm -rf components
cp -r src components
rm -rf components/*/*.js components/*.js
rm -rf components/themeable
rm -rf components/message/message-time
rm -rf components/message/message-header
rm -rf components/message/image-message
rm -rf components/message/sticker-message
rm -rf components/message/text-message
rm -rf components/message/typing-message
rm -rf components/message/giphy-message
rm -rf components/message/video-message
npm run docs
rm -rf components
