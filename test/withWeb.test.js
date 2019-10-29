'use strict';

const configWeb = require('../addons/withWeb');

it('should match snapshot', () => {
    expect(configWeb()).toMatchSnapshot();
});
