'use strict';

module.exports = (options) => {
    options = {
        transformModules: (patterns) => patterns,
        ...options,
    };

    const reactNativePreset = require('react-native/jest-preset');

    const transformModules = options.transformModules([
        '(jest-)?react-native(-.*)?/',
        '@react-native-community/',
    ]);

    return (config) => ({
        ...config,
        haste: {
            ...config.haste,
            ...reactNativePreset.haste,
        },
        transform: {
            ...config.transform,
            '\\.(png|jpg|jpeg|gif|webp|svg|ico|bmp)$': require.resolve('../../transforms/file'),
            '\\.(eot|ttf|woff|woff2|otf)$': require.resolve('../../transforms/file'),
            '\\.(mp3|flac|wav|aac|ogg|oga|mp4|m4a|webm|ogv)$': require.resolve('../../transforms/file'),
            '\\.(obj|mtl|fnt|glb)$': require.resolve('../../transforms/file'),
        },
        transformIgnorePatterns: [
            `node_modules/(?!${transformModules.join('|')})`,
        ],
        setupFiles: [
            ...config.setupFiles,
            ...reactNativePreset.setupFiles,
        ],
    });
};
