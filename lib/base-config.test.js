'use strict';

jest.mock('ci-info', () => ({ isCI: false }));

process.getuid = () => 1;

const baseConfig = require('./base-config');

it('should match snapshot', () => {
    expect(baseConfig()).toMatchSnapshot();
});
