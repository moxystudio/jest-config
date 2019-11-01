'use strict';

module.exports = (config = {}) => {
    const {
        transform = {},
        collectCoverageFrom = [],
        coveragePathIgnorePatterns = [],
        setupFilesAfterEnv = [],
    } = config;

    config.transform = {
        '\\.data-url\\.': require.resolve('./data-url'),
        '\\.inline\\.': require.resolve('./inline'),
        ...transform,
    };

    config.collectCoverageFrom = [
        ...collectCoverageFrom,
        'www/**/*.js',
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
