'use strict';

const baseConfig = require('../baseConfig');

it('should match snapshot', () => {
    expect(baseConfig()).toMatchSnapshot();
});
