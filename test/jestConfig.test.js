'use strict';

const jestConfig = require('../jestConfig');

it('should match snapshot', () => {
    expect(jestConfig()).toMatchSnapshot();
});
