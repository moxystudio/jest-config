'use strict';

const withWeb = require('.');

it('should match snapshot', () => {
    expect(withWeb()).toMatchSnapshot();
});
