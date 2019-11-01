'use strict';

const dataUrlTransformer = require('../addons/with-web/data-url');
const fs = require('fs');

it('should return string containing data-url', () => {
    const fileContent = 'this is a standard text file!';
    const fileName = `${__dirname}/test-files/dataurl_test_file.txt`;

    // Can be verified at https://regex101.com/r/r8tE5u/3
    const matcher = /data:([\w/+]+);(charset=[\w-]+|base64),([a-zA-Z0-9+/]+={0,2})/;

    fs.writeFileSync(fileName, fileContent);

    const output = dataUrlTransformer.process(null, fileName);

    fs.unlinkSync(fileName);

    expect(output).toMatch(matcher);
    expect(output).toMatchSnapshot();
});

it('should throw when it cannot guess the MIME type of a file', () => {
    const fileContent = 'this is a test file with a strange extension!';
    const fileName = `${__dirname}/test-files/dataurl_test_file.strange`;

    fs.writeFileSync(fileName, fileContent);

    expect(() => dataUrlTransformer.process(null, fileName)).toThrow(/Could not guess/);

    fs.unlinkSync(fileName);
});
