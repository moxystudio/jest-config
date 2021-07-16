'use strict';

const fs = require('fs');
const tmp = require('tmp-sync');

const dir = tmp.in(__dirname);

afterAll(() => {
    tmp.clean();
});

it('should return XML string', () => {
    const contents = `
<?xml version="1.0" encoding="UTF-8"?>
<todos>
    <todo id="1">
        <description>foo</description>
        <done>true</done>
    </todo>
    <todo id="2">
        <description>bar</description>
        <done>false</done>
    </todo>
</todos>
`;
    const filename = `${dir}/test-file.xml`;

    fs.writeFileSync(filename, contents);

    expect(require(filename)).toMatchSnapshot();
});
