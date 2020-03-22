'use strict';

jest.mock('ci-info', () => ({ isCI: false }));

process.getuid = () => 1;

const baseConfig = require('./base-config');

it('should match snapshot', () => {
    expect(baseConfig()).toMatchSnapshot();
});

it('should set test environment', () => {
    expect(baseConfig().testEnvironment).toBe('jsdom');
    expect(baseConfig('jsdom').testEnvironment).toBe('jsdom');
    expect(baseConfig('node').testEnvironment).toBe('node');
});
