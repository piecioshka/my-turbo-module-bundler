#!/usr/bin/env node

// CLI = Command Line Interface

const path = require('path');
const yargs = require('yargs');
const { bundle } = require('../src/index');

const argv = yargs
    .usage('my-turbo-module-bundler\n\n  > $0 main.js [-o bundle.js]')
    .option('o', {
        alias: 'output',
        describe: 'Path to output file',
        type: 'string'
    })
    .argv;

(async () => {
    const entryArg = argv._[0];

    if (!entryArg) {
        return void yargs.showHelp();
    }

    const entry = path.resolve(entryArg);
    const output = argv.o || `${process.cwd()}/bundle.js`;
    bundle({ entry, output });
})();
