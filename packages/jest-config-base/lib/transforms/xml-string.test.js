'use strict';

const xmlString = require('./fixtures/file.xml');

it('should return XML string', () => {
    expect(xmlString).toMatchSnapshot();
});
