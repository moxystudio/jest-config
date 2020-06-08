'use strict';

const fs = require('fs');
const tmp = require('tmp-sync');
const inlineTransformer = require('./inline');

const dir = tmp.in(__dirname);

afterAll(() => {
    tmp.clean();
});

it('should return inline content of file', () => {
    const contents = 'this is a file!';
    const filename = `${dir}/inline-test-file.txt`;

    fs.writeFileSync(filename, contents);

    const output = inlineTransformer.process(contents, filename, {});

    expect(output).toContain(contents);
    expect(output).toMatchSnapshot();
});
