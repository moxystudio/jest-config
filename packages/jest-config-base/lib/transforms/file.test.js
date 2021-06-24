'use strict';

const fs = require('fs');
const tmp = require('tmp-sync');
const inlineTransformer = require('./file');

const dir = tmp.in(__dirname);

afterAll(() => {
    tmp.clean();
});

it('should return basename of the file', () => {
    const contents = 'foo';
    const filename = `${dir}/test-file.txt`;

    fs.writeFileSync(filename, contents);

    const output = inlineTransformer.process(contents, filename, {});

    expect(output).toContain('test-file.txt');
    expect(output).toMatchSnapshot();
});
