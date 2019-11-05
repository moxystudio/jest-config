'use strict';

const fs = require('fs');
const tmp = require('tmp-sync');
const inlineTransformer = require('../addons/with-web/inline');

const dir = tmp.in(__dirname);

afterAll(() => {
    tmp.clean();
});

it('should return inline content of file', () => {
    const fileContent = 'this is a file!';
    const filename = `${dir}/inline-test-file.txt`;

    fs.writeFileSync(filename, fileContent);

    const output = inlineTransformer.process(null, filename);

    expect(output).toContain(fileContent);
    expect(output).toMatchSnapshot();
});
