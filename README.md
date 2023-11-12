# my-turbo-module-bundler

[![github-ci](https://github.com/piecioshka/my-turbo-module-bundler/workflows/Testing/badge.svg?branch=master)](https://github.com/piecioshka/my-turbo-module-bundler/actions/)
[![circle-ci](https://circleci.com/gh/piecioshka/my-turbo-module-bundler.svg?style=svg)](https://circleci.com/gh/piecioshka/my-turbo-module-bundler)

:hammer: My Turbo Module Bundler

> Give a ⭐️ if this project helped you!

## Preview 🎉

<https://piecioshka.github.io/my-turbo-module-bundler>

## Motivation

Create my module bundle to know how bundling works.

## Features

* :white_check_mark: Bundling multiple files using CommonJS Modules
* :white_check_mark: Integration with CI: GitHub Actions, Circle Ci
* :warning: Unit tests
    + :white_check_mark: Create bundle file with proper context
* :no_entry: Use AST to process module content instead of Regular Expression

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

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
