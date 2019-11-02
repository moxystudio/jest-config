'use strict';

const baseConfig = require('../base-config');

it('should match snapshot', () => {
    expect(baseConfig()).toMatchSnapshot();
});
