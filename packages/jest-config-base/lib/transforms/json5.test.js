'use strict';

const fs = require('fs');
const tmp = require('tmp-sync');
const json5Transformer = require('./json5');

const dir = tmp.in(__dirname);

afterAll(() => {
    tmp.clean();
});

it('should return JSON of the file', () => {
    const contents = `
// This is a comment
{
    "hello": "world",
}
`;
    const filename = `${dir}/test-file.json5`;

    fs.writeFileSync(filename, contents);

    const output = json5Transformer.process(contents, filename, {});

    expect(output).toMatchSnapshot();
});
