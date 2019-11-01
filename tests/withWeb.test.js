'use strict';

const configWeb = require('../addons/with-web');

it('should match snapshot', () => {
    expect(configWeb()).toMatchSnapshot();
});
