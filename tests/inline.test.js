'use strict';

const fs = require('fs');
const inlineTransformer = require('../addons/with-web/inline');

it('should return inline content of file', () => {
    const fileContent = 'this is a file!';
    const fileName = `${__dirname}/test-files/inline_test_file.txt`;

    fs.writeFileSync(fileName, fileContent);

    const output = inlineTransformer.process(null, fileName);

    fs.unlinkSync(fileName);

    expect(output).toContain(fileContent);
    expect(output).toMatchSnapshot();
});
