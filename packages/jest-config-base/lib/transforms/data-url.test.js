'use strict';

const fs = require('fs');
const path = require('path');
const tmp = require('tmp-sync');
const dataUrlTransformer = require('./data-url');

const dir = tmp.in(__dirname);

afterAll(() => {
    tmp.clean();
});

it('should return string containing data-url', () => {
    const contents = 'this is a standard text file!';
    const filename = `${dir}/dataurl-test-file.txt`;

    // Can be verified at https://regex101.com/r/r8tE5u/3
    const matcher = /data:([\w/+]+);(charset=[\w-]+|base64),([a-zA-Z0-9+/]+={0,2})/;

    fs.writeFileSync(filename, contents);

    const output = dataUrlTransformer.process(contents, filename, {});

    expect(output).toMatch(matcher);
    expect(output).toMatchSnapshot();
});

it('should throw when it cannot guess the MIME type of a file and show extension', () => {
    const contents = 'this is a test file with a strange extension!';
    const filename = `${dir}/dataurl-test-file.strange`;

    fs.writeFileSync(filename, contents);

    expect(() => dataUrlTransformer.process(contents, filename, {})).toThrow(/Could not guess/);
    expect(() => dataUrlTransformer.process(contents, filename, {})).toThrow(path.extname(filename));
});

it('should throw when it cannot guess the MIME type of a file and show whole filename when there is no extension', () => {
    const contents = 'this is a test file with a strange extension!';
    const filename = `${dir}/dataurl-test-file-strange`;

    fs.writeFileSync(filename, contents);

    expect(() => dataUrlTransformer.process(contents, filename, {})).toThrow(/Could not guess/);
    expect(() => dataUrlTransformer.process(contents, filename, {})).toThrow(path.basename(filename));
});
