'use strict';

const assert = require('assert');

module.exports = () => (config) => {
    assert(config.testEnvironment === 'jsdom', new TypeError('Expected testEnvironment to be set to "jsdom".'));

    return {
        ...config,
        transform: {
            ...config.transform,
            '\\.(png|jpg|jpeg|gif|webp|svg|ico|bmp)$': require.resolve('../../transforms/file'),
            '\\.(eot|ttf|woff|woff2|otf)$': require.resolve('../../transforms/file'),
            '\\.(mp3|flac|wav|aac|ogg|oga|mp4|m4a|webm|ogv)$': require.resolve('../../transforms/file'),
            '\\.(obj|mtl|fnt|glb)$': require.resolve('../../transforms/file'),
            '\\.data-url\\.[^\\.+?]$': require.resolve('../../transforms/data-url'),
            '\\.inline\\.[^\\.+?]$': require.resolve('../../transforms/inline'),
        },
        moduleNameMapper: {
            ...config.moduleNameMapper,
            '\\.css$': require.resolve('identity-obj-proxy'),
        },
    };
};
