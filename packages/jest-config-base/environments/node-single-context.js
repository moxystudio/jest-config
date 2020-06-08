'use strict';

const NodeEnvironment = require('jest-environment-node');

/**
 * Special Node environment class for Jest which runs all scripts in the same context. This effectively disables
 * the sandbox isolation which is completely broken (See https://github.com/facebook/jest/issues/2549).
 */
module.exports = class NodeEnvironmentSingleContext extends NodeEnvironment {
    constructor(...args) {
        super(...args);

        this.global = global;
        this.getVmContext = undefined;
    }

    runScript(script) {
        return script.runInThisContext();
    }
};
