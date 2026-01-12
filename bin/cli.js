#!/usr/bin/env node

// CLI = Command Line Interface

const path = require('path');
const minimist = require('minimist');
const pkg = require('../package.json');
const { bundle } = require('../src/index');

function showHelp() {
    console.log(`my-turbo-module-bundler

  > my-turbo-module-bundler main.js [-o bundle.js]

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -o, --output   Path to output file                                    [string]`);
}

const argv = minimist(process.argv.slice(2), {
    string: ['o', 'output'],
    boolean: ['help', 'version'],
    alias: { o: 'output' }
});

(async () => {
    if (argv.help) {
        return showHelp();
    }

    if (argv.version) {
        return console.log(pkg.version);
    }

    const entryArg = argv._[0];

    if (!entryArg) {
        return showHelp();
    }

    const entry = path.resolve(String(entryArg));
    const output = argv.output || `${process.cwd()}/bundle.js`;
    bundle({ entry, output });
})();
