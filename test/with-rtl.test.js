'use strict';

const configWeb = require('../addons/with-rtl');

it('should match snapshot', () => {
    expect(configWeb()).toMatchSnapshot();
});
