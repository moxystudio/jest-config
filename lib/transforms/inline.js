'use strict';

const { process } = require('babel-jest');

module.exports = {
    process(src, ...rest) {
        src = `
const contents = ${JSON.stringify(src)};

export default contents;
`;

        return process(src, ...rest).code;
    },
};
