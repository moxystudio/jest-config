'use strict';

const configWeb = require('.');

it('should match snapshot', () => {
    expect(configWeb()).toMatchSnapshot();
});
