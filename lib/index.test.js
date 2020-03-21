'use strict';

const jestConfig = require('.');

it('should export all functionality', () => {
    expect(jestConfig).toHaveProperty('compose');
    expect(jestConfig).toHaveProperty('baseConfig');
    expect(jestConfig).toHaveProperty('withRTL');
    expect(jestConfig).toHaveProperty('withEnzyme');
    expect(jestConfig).toHaveProperty('withWeb');
    expect(jestConfig).toHaveProperty('withReactNative');
});
