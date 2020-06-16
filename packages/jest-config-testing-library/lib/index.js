'use strict';

const assert = require('assert');

const withRTL = () => (config) => {
    assert(config.testEnvironment === 'jsdom', new TypeError('Expected testEnvironment to be set to "jsdom".'));

    return ({
        ...config,
        setupFilesAfterEnv: [
            ...config.setupFilesAfterEnv,
            require.resolve('@testing-library/jest-dom/extend-expect'),
        ],
    });
};

const withNTL = () => (config) => {
    assert(config.testEnvironment === 'node', new TypeError('Expected testEnvironment to be set to "node".'));

    const nativeTestingLibraryPreset = require('@testing-library/react-native/jest-preset');
    const removeDuplicates = (array) => [...new Set(array)];

    return ({
        ...config,
        setupFilesAfterEnv: [
            ...config.setupFilesAfterEnv,
            require.resolve('@testing-library/jest-native/extend-expect'),
            require.resolve('@testing-library/react-native/cleanup-after-each'),
        ],
        // Native Testing Library includes React Native preset in its own setup.
        // Since .withReactNative from jest-config-react-native already takes care of that,
        // we have to remove the duplicated path to the preset module from the array.
        setupFiles: removeDuplicates([
            ...config.setupFiles,
            ...nativeTestingLibraryPreset.setupFiles,
        ]),
        snapshotSerializers: [
            ...config.snapshotSerializers,
            ...nativeTestingLibraryPreset.snapshotSerializers,
        ],
    });
};

module.exports = {
    withRTL,
    withNTL,
};
