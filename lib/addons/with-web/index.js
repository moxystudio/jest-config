'use strict';

module.exports = (config = {}) => {
    const {
        transform = {},
        testPathIgnorePatterns = [],
        collectCoverageFrom = [],
        coveragePathIgnorePatterns = [],
    } = config;

    config.testPathIgnorePatterns = [
        '/node_modules/',
        '/docusaurus/',
        ...testPathIgnorePatterns,
    ];

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

    return config;
};
