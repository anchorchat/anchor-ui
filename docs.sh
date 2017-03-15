#!/bin/bash

rm -rf components
cp -r src components
rm -rf components/*/*.js components/*.js
npm run docs
rm -rf components
