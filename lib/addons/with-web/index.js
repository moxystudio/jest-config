'use strict';

module.exports = (config = {}) => {
    const {
        transform = {},
        collectCoverageFrom = [],
        coveragePathIgnorePatterns = [],
        setupFilesAfterEnv = [],
    } = config;

    config.transform = {
        '\\.data-url\\.': require.resolve('../../transforms/data-url'),
        '\\.inline\\.': require.resolve('../../transforms/inline'),
        ...transform,
    };

    config.collectCoverageFrom = [
        ...collectCoverageFrom,
        'www/**/*.js',
        'api/**/*.js',
    ];

    config.coveragePathIgnorePatterns = [
        ...coveragePathIgnorePatterns,
        '.*\\.data\\.js',
    ];

    config.setupFilesAfterEnv = [
        ...setupFilesAfterEnv,
        '@testing-library/jest-dom/extend-expect',
    ];

    return config;
};
