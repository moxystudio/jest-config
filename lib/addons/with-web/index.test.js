'use strict';

const withWeb = require('.');

const buildConfig = () => ({
    testPathIgnorePatterns: ['foo'],
    transform: {
        foo: 'bar',
    },
    collectCoverageFrom: ['bar'],
    coveragePathIgnorePatterns: ['baz'],
});

it('should match snapshot', () => {
    expect(withWeb(buildConfig())).toMatchSnapshot();
});
