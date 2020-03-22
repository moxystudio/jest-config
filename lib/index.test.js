'use strict';

const jestConfig = require('.');

it('should export all functionality', () => {
    expect(jestConfig).toHaveProperty('compose');
    expect(jestConfig).toHaveProperty('baseConfig');
    expect(jestConfig).toHaveProperty('withWeb');
    expect(jestConfig).toHaveProperty('withReactNative');
    expect(jestConfig).toHaveProperty('withRTL');
    expect(jestConfig).toHaveProperty('withNTL');
    expect(jestConfig).toHaveProperty('withEnzymeWeb');
    expect(jestConfig).toHaveProperty('withEnzymeReactNative');
});
