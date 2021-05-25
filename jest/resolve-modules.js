'use strict';

const VIRTUAL_MODULES = [
    // Add here modules that are not installed but which you still need to require by using require.resolve
];

module.exports = (path, options) => {
    if (VIRTUAL_MODULES.includes(path)) {
        return path;
    }

    return options.defaultResolver(path, options);
};
