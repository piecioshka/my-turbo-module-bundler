const path = require('path');
const fs = require('fs').promises;

const modules = Object.create(null);
const regexp = /[^\w\d]require\((.*)\)/mg;

function findRequireCall(fileContent) {
    const matches = [];
    let match = null;
    do {
        match = regexp.exec(fileContent);
        if (match) {
            matches.push(match);
        }
    } while (match);

    return matches;
}

function normalizeModuleFilename(moduleFilename) {
    if (moduleFilename.endsWith('.js')) {
        return moduleFilename;
    }
    return `${moduleFilename}.js`;
}

function trimStringChars(string) {
    return ["'", '"', "`"].reduce((value, char) => {
        const r = new RegExp(`^${char}|${char}$`, 'g');
        return value.replace(r, '');
    }, string);
}

// moduleName => ./main, ./main.js
// modulePath => /Users/piecioshka/projects/my-turbo-module-bundler/main.js

function buildModulePath(file, moduleName) {
    const name = normalizeModuleFilename(trimStringChars(moduleName));
    return path.resolve(path.dirname(file), name);
}

async function parseModule(file) {
    modules[file] = (await fs.readFile(file)).toString();

    const requireCalls = findRequireCall(modules[file]);
    const modulePaths = requireCalls
        .map((requireCall) => {
            const moduleName = requireCall[1];
            return buildModulePath(file, moduleName);
        });

    return Promise.all(modulePaths.map(parseModule));
}

function preambule(entryModule) {
    return `
(function(modules) {
    function __require__(moduleName) {
        const module = {};
        modules[moduleName].call(null, module, __require__);
        return module.exports;
    }

    __require__("${entryModule}");
})({
    `;
}

function postambule() {
    return `
})
    `;
}

function template(moduleFilename, content) {
    const compiledContent = content
        .trim()
        .replace(regexp, (_, moduleName) => {
            return ` __require__("${buildModulePath(moduleFilename, moduleName)}")`;
        })
        .replace(/\n/mg, '\n');
    return `
    "${moduleFilename}": function (module, __require__) {
        eval(\`${compiledContent}\`)
    }
    `;
}

// path.basename('path/to/file.js') => 'file.js'

function buildBundleFile(entryFile, outputFile) {
    let bundleContent = Object.keys(modules)
        .map((key) => template(key, modules[key]))
        .join(',');
    bundleContent = preambule(entryFile).trim()
         + bundleContent + postambule();
    fs.writeFile(outputFile, bundleContent);
}

function bundle(config) {
    // console.log('my-turbo-module-bundler', config);

    parseModule(config.entry)
        .then(() => {
            buildBundleFile(config.entry, config.output);
        })
        .catch((err) => {
            console.error(err.message);
            process.exit(1);
        });
}

module.exports = { bundle };
