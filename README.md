# my-turbo-module-bundler

[![github-ci](https://github.com/piecioshka/my-turbo-module-bundler/workflows/Testing/badge.svg?branch=master)](https://github.com/piecioshka/my-turbo-module-bundler/actions/)
[![travis-ci](https://api.travis-ci.org/piecioshka/my-turbo-module-bundler.svg?branch=master)](https://travis-ci.org/piecioshka/my-turbo-module-bundler)
[![circle-ci](https://circleci.com/gh/piecioshka/my-turbo-module-bundler.svg?style=svg)](https://circleci.com/gh/piecioshka/my-turbo-module-bundler)

:hammer: My Turbo Module Bundler

## Demo 🎉

<https://piecioshka.github.io/my-turbo-module-bundler>

## Motivation

Create my module bundle to know how bundling works.

## Features

* :white_check_mark: Bundling multiple files using CommonJS
* :no_entry: Use AST to process module content instead of Regular Expression
* :no_entry: Unit tests
* :no_entry: Integration with CI: GitHub Actions, Travis Ci, Circle Ci

## CLI

```bash
git clone git@github.com:piecioshka/my-turbo-module-bundler.git
cd my-turbo-module-bundler
npm link
my-turbo-module-bundler main.js -o bundle.js
```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](https://github.com/piecioshka/my-turbo-module-bundler/issues/).

## Show your support

Give a ⭐️ if this project helped you!

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
