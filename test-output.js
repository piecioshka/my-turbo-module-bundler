(function(modules) {
    function __require__(moduleName) {
        const module = {};
        modules[moduleName].call(null, module, __require__);
        return module.exports;
    }

    __require__("/home/runner/work/my-turbo-module-bundler/my-turbo-module-bundler/test/dummies/fake-app/main.js");
})({
    "/home/runner/work/my-turbo-module-bundler/my-turbo-module-bundler/test/dummies/fake-app/main.js": function (module, __require__) {
        eval(`const moduleA = __require__("/home/runner/work/my-turbo-module-bundler/my-turbo-module-bundler/test/dummies/fake-app/module-a.js");
const moduleB = __require__("/home/runner/work/my-turbo-module-bundler/my-turbo-module-bundler/test/dummies/fake-app/module-b.js");

console.log(moduleA);
console.log(moduleB);`)
    }
    ,
    "/home/runner/work/my-turbo-module-bundler/my-turbo-module-bundler/test/dummies/fake-app/module-a.js": function (module, __require__) {
        eval(`module.exports = {
    name: 'module-a'
};`)
    }
    ,
    "/home/runner/work/my-turbo-module-bundler/my-turbo-module-bundler/test/dummies/fake-app/module-b.js": function (module, __require__) {
        eval(`module.exports = {
    name: 'module-b'
};`)
    }
    
})
    