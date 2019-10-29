'use strict';

const dataUrlTransformer = require('../addons/withWeb/data-url');
const fs = require('fs');

it('should return string containing data-url', () => {
    const fileContent = 'this is a file!';
    const fileName = './inline_test_file.txt';

    // Can be verified at https://regex101.com/r/r8tE5u/3
    const matcher = /data:([\w/+]+);(charset=[\w-]+|base64),([a-zA-Z0-9+/]+={0,2})/;

    fs.writeFileSync(fileName, fileContent);

    const output = dataUrlTransformer.process(null, fileName);

    fs.unlinkSync(fileName);

    expect(output).toMatch(matcher);
    expect(output).toMatchSnapshot();
});
