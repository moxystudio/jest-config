'use strict';

jest.mock('ci-info', () => ({ isCI: false }));

const baseConfig = require('../base-config');

it('should match snapshot', () => {
    expect(baseConfig()).toMatchSnapshot();
});
