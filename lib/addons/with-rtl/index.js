'use strict';

module.exports = (config = {}) => {
    const {
        setupFilesAfterEnv = [],
    } = config;

    config.setupFilesAfterEnv = [
        ...setupFilesAfterEnv,
        '@testing-library/jest-dom/extend-expect',
    ];

    return config;
};
