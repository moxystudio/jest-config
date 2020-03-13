'use strict';

module.exports = (config = {}) => {
    const {
        transform = {},
        testPathIgnorePatterns = [],
        collectCoverageFrom = [],
        coveragePathIgnorePatterns = [],
    } = config;

    config.testPathIgnorePatterns = [
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
