'use strict';

const fs = require('fs');
const path = require('path');
const tmp = require('tmp-sync');
const dataUrlTransformer = require('../addons/with-web/data-url');

const dir = tmp.in(__dirname);

afterAll(() => {
    tmp.clean();
});

it('should return string containing data-url', () => {
    const fileContent = 'this is a standard text file!';
    const filename = `${dir}/dataurl-test-file.txt`;

    // Can be verified at https://regex101.com/r/r8tE5u/3
    const matcher = /data:([\w/+]+);(charset=[\w-]+|base64),([a-zA-Z0-9+/]+={0,2})/;

    fs.writeFileSync(filename, fileContent);

    const output = dataUrlTransformer.process(null, filename);

    fs.unlinkSync(filename);

    expect(output).toMatch(matcher);
    expect(output).toMatchSnapshot();
});

it('should throw when it cannot guess the MIME type of a file and show extension', () => {
    const fileContent = 'this is a test file with a strange extension!';
    const filename = `${dir}/dataurl-test-file.strange`;

    fs.writeFileSync(filename, fileContent);

    expect(() => dataUrlTransformer.process(null, filename)).toThrow(/Could not guess/);
    expect(() => dataUrlTransformer.process(null, filename)).toThrow(path.extname(filename));

    fs.unlinkSync(filename);
});

it('should throw when it cannot guess the MIME type of a file and show whole filename when there is no extension', () => {
    const fileContent = 'this is a test file with a strange extension!';
    const filename = `${dir}/dataurl-test-file-strange`;

    fs.writeFileSync(filename, fileContent);

    expect(() => dataUrlTransformer.process(null, filename)).toThrow(/Could not guess/);
    expect(() => dataUrlTransformer.process(null, filename)).toThrow(path.basename(filename));

    fs.unlinkSync(filename);
});
