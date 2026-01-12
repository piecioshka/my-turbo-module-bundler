# my-turbo-module-bundler

[![github-ci](https://github.com/piecioshka/my-turbo-module-bundler/workflows/Testing/badge.svg?branch=main)](https://github.com/piecioshka/my-turbo-module-bundler/actions/)

🔨 My Turbo Module Bundler

> Give a ⭐️ if this project helped you!

## Preview 🎉

<https://piecioshka.github.io/my-turbo-module-bundler>

## Motivation

Create my module bundle to know how bundling works.

## Features

- ✅ Bundling multiple files using CommonJS Modules
- ✅ Integration with CI: GitHub Actions
- ⚠️ Unit tests
    - ✅ Create bundle file with proper context
- ⛔ Use AST to process module content instead of Regular Expression

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

[The MIT License](https://piecioshka.mit-license.org) @ 2020
