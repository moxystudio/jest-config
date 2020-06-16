'use strict';

const VIRTUAL_MODULES = [
    '@testing-library/react-native/cleanup-after-each',
];

module.exports = (path, options) => {
    if (VIRTUAL_MODULES.includes(path)) {
        return path;
    }

    return options.defaultResolver(path, options);
};
