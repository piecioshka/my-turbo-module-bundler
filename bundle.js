(function(modules) {
    function __require__(moduleName) {
        const module = {};
        modules[moduleName].call(null, module, __require__);
        return module.exports;
    }

    __require__("/Users/pkowalski/projects/my-turbo-module-bundler/test/dummies/fake-app/main.js");
})({
    "/Users/pkowalski/projects/my-turbo-module-bundler/test/dummies/fake-app/main.js": function (module, __require__) {
        eval(`const moduleA = __require__("/Users/pkowalski/projects/my-turbo-module-bundler/test/dummies/fake-app/module-a.js");
const moduleB = __require__("/Users/pkowalski/projects/my-turbo-module-bundler/test/dummies/fake-app/module-b.js");

console.log(moduleA);
console.log(moduleB);`)
    }
    ,
    "/Users/pkowalski/projects/my-turbo-module-bundler/test/dummies/fake-app/module-a.js": function (module, __require__) {
        eval(`module.exports = {
    name: 'module-a'
};`)
    }
    ,
    "/Users/pkowalski/projects/my-turbo-module-bundler/test/dummies/fake-app/module-b.js": function (module, __require__) {
        eval(`module.exports = {
    name: 'module-b'
};`)
    }
    
})
    