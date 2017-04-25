# Contributing

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Anchor-UI community. Here are a few guidelines that will help you along the way.

## Asking Questions

For how-to questions and other non-issues, please contact [Sjaak Luthart](mailto:sjaak.luthart@anchor.chat) or [Ian Stewart](mailto:ian.stewart@anchor.chat) instead of Github issues.

## Opening an Issue

If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported or fixed](https://github.com/anchorchat/anchor-ui/issues). You can search through existing issues and PRs to see if someone has reported one similar to yours.

Next, create a new issue that briefly explains the problem, and provides a bit of background as to the circumstances that triggered it, and steps to reproduce it.

For code issues please include:
* Anchor-UI version
* React version
* Browser version
* A code example or link to a repo, gist or running site.

For visual or layout problems, images or animated gifs can help explain your issue.
It's even better with a live reproduction test case.

For feature requests please include a link to the relevant feature spec, or a screenshot.

### Issue Guidelines

Please begin the title with '[ComponentName]' where appropriate, and use a brief description. "doesn't work" doesn't help others find similar issues.

Please don't group multiple topics into one issue, but instead each should be its own issue.

And please don't just '+1' an issue. It spams the maintainers and doesn't help move the issue forward.

## Submitting a Pull Request

Anchor-UI is a public project, so pull requests are always welcome, but before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big PR.

As with issues, please begin the title with [ComponentName].

When adding new features or modifying existing code, please attempt to include tests to confirm the new behaviour.

### Branch Structure

All stable releases are tagged ([view tags](https://github.com/anchorchat/anchor-ui/tags)). At any given time, `master` represents the latest stable version of the library.

When making a new branch consider the following:
* issue-#[number] for issues
* feature/[feature-name] for new features

## Getting started

Please create a new branch from an up to date develop on your fork.

1. Fork the Anchor-UI repository on Github
2. Clone your fork to your local machine
3. Create a branch `git checkout -b feature/[my-feature]`
4. Make your changes, lint, then push to github with `git push --set-upstream origin feature/[my-feature]`.
5. Visit github and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.
```js
git remote add upstream git@github.com:anchorchat/anchor-ui.git
git checkout develop
git pull upstream develop
git checkout -b my-topic-branch
npm update
```

### Testing the documentation site

The documentation site is built with Anchor-UI, and contains examples of all the components. To get started:
```js
npm install
cd docs
npm install
npm start
```
You can now access the documentation site locally. Check your terminal to see on which port it's running. (for example `localhost:3000`)

Tests can be run with `npm run test`.

### Coding style

Please follow the coding style of the current code base. Anchor-UI uses eslint, so if possible, enable linting in your editor to get realtime feedback. Linting can be run manually with `npm run lint`. When using atom it's possible to install `linter-eslint` and `linter`, `$ apm install linter && apm install linter-eslint`.

Finally, when you submit a pull request, linting is run again by Continuous Integration testing, but hopefully by then your code is already clean!

### Commit style

_Do commit early and often_ ~[sethrobertson](https://sethrobertson.github.io/GitBestPractices/#commit)

If you want you can use [gitmoji](http://gitmoji.carloscuesta.me/about).

While making a commit please consider the following:
* Clear commit message.
* Commit message reflects the done work.
* When fixing an issue reflect this in the message `fixes #[issue-number]`
* Only commit in English

## License

By contributing your code to the anchorchat/anchor-ui GitHub repository, you agree to license your contribution under the MIT license.
