'use strict';

const jestConfig = require('.');

it('should export all functionality', () => {
    expect(jestConfig).toHaveProperty('compose');
    expect(jestConfig).toHaveProperty('baseConfig');
});
