const path = require('path');
const fs = require('fs').promises;
const del = require('del');
const { bundle } = require('../../src/index');
const { createFiles } = require('../helpers/create-file');

process.on('unhandledRejection', (err) => {
    console.log(err);
});

const root = path.join(__dirname, '..', '..');
const fakeOutputPath = path.join(root, 'test', 'dummies', 'fake-test-app');
const fakeEntryFilename = path.join(fakeOutputPath, 'main.js');
const fakeOutputFilename = path.join(fakeOutputPath, 'bundle.js');

describe('Bundle', () => {
    afterEach(async () => {
        // Teardown
        await del(fakeOutputPath);
    });

    it('should create bundle file for single entry file', async () => {
        // Given
        await createFiles(fakeOutputPath, {
            'main.js': `xxx`,
        });

        // When
        await bundle({
            entry: fakeEntryFilename,
            output: fakeOutputFilename
        });

        // Then
        expect(async () => await fs.stat(fakeOutputFilename)).not.toThrow();
    });

    it('should create bundle file with source file content', async () => {
        // Given
        await createFiles(fakeOutputPath, {
            'main.js': `
                function main() {
                    console.log('hello world');
                }
                main();
            `
        });

        // When
        await bundle({
            entry: fakeEntryFilename,
            output: fakeOutputFilename
        });

        // Then
        expect(await fs.readFile(fakeOutputFilename, 'utf-8')).toContain('hello world');
    });

    it('should combine source files into single bundle file', async () => {
        // Given
        await createFiles(fakeOutputPath, {
            'main.js': `
                const m1 = require('./module-a.js');
            `,
            'module-a.js': `
                console.log('ciasteczko');
            `
        });

        // When
        await bundle({
            entry: fakeEntryFilename,
            output: fakeOutputFilename
        });

        // Then
        expect(await fs.readFile(fakeOutputFilename, 'utf-8')).toContain('ciasteczko');
    });
});
