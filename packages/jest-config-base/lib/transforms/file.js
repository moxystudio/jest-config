'use strict';

const path = require('path');
const { process } = require('babel-jest');

module.exports = {
    process(src, filename, ...rest) {
        const basename = path.basename(filename);

        src = `
const basename = ${JSON.stringify(basename)};

export default basename;
`;

        return process(src, filename, ...rest).code;
    },
};
