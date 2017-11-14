# Anchor UI

[![Build Status](https://travis-ci.org/anchorchat/anchor-ui.svg?branch=master)](https://travis-ci.org/anchorchat/anchor-ui)
[![npm version](https://badge.fury.io/js/anchor-ui.svg)](https://badge.fury.io/js/anchor-ui)
[![Coverage Status](https://coveralls.io/repos/github/anchorchat/anchor-ui/badge.svg?branch=issue-%23977)](https://coveralls.io/github/anchorchat/anchor-ui?branch=issue-%23977)

UI kit for chat engines with React

Anchor UI uses free Emoji icons supplied by [EmojiOne](https://www.emojione.com/)

## Usage

Install from npm

[![NPM](https://nodei.co/npm/anchor-ui.png)](https://nodei.co/npm/anchor-ui/)

### Documentation

Check out our [docs](https://anchorchat.github.io/anchor-ui/#/) website!

# Browser Support

Anchor UI currently supports the following browsers.

|![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.4.2/chrome/chrome_48x48.png)|![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.4.2/firefox/firefox_48x48.png)|![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.4.2/safari/safari_48x48.png)|![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.4.2/opera/opera_48x48.png)|![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.4.2/edge/edge_48x48.png)|![Internet Explorer](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/42.4.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png)|
|--------------|--------------|------------|--------------|--------------|----------|
|macOS latest  |macOS latest  |macOS latest|macOS latest  |              |          |
|Windows latest|Windows latest|iOS 9 and up|Windows latest|Windows latest|version 11|
|iOS latest    |iOS latest    |            |              |              |          |
|Android latest|Android latest|            |              |              |          |

## Installation

### src

Install `node_modules` used in `./src`:

```bash
$ npm i
```

Compile `./src` with Babel:

```bash
$ npm run compile
```

### Docs

Install `node_modules` used in `./examples`:

```bash
$ cd docs && npm i
```

## Development

### src

To watch for changes in `./src` run:

```bash
$ npm run watch
```

Babel will compile `./src` on changes.

### docs

To start the webpack server run:

```bash
$ cd docs && npm run start
```

Webpack wil compile on changes in `./docs/src`.

### Generating CHANGELOG.md

[Request a token from github](https://github.com/skywinder/github-changelog-generator#github-token)

```bash
$ bundle install && make changelog
```

## Contribute

If you'd like to help with the development of this module please consider our [contributing guidelines](https://github.com/anchorchat/anchor-ui/blob/master/CONTRIBUTING.md).

## Team

|![Sjaak Luthart](https://avatars1.githubusercontent.com/u/6596471?v=3&s=150)|![Ian Stewart](https://avatars2.githubusercontent.com/u/14125280?v=3&s=150)|![Lars Tadema](https://avatars0.githubusercontent.com/u/16486197?v=3&s=150)|![Peter Kuiper](https://avatars3.githubusercontent.com/u/6492184?v=3&s=150)|![Daan Nagtegaal](https://avatars0.githubusercontent.com/u/3033357?v=3&s=150)|![Martijn Reeuwijk](https://avatars1.githubusercontent.com/u/15121010?v=3&s=150)|![Mitchel van Bever](https://avatars1.githubusercontent.com/u/10127707?v=3&s=150)
|---|---|---|---|---|---|---|
|[Sjaak Luthart](https://github.com/sjaakluthart)|[Ian Stewart](https://github.com/IanCStewart)|[Lars Tadema](https://github.com/larstadema)|[Peter Kuiper](https://github.com/peterkuiper)|[Daan Nagtegaal](https://github.com/daannagtegaal)|[Martijn Reeuwijk](https://github.com/MartijnReeuwijk)|[Mitchel van Bever](https://github.com/MrBamBam)

## License

This project is licensed under the terms of the [MIT license](https://github.com/anchorchat/anchor-ui/blob/master/LICENSE).
