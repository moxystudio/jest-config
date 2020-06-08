'use strict';

const path = require('path');
const mime = require('mime');
const { process } = require('babel-jest');

module.exports = {
    process(src, filename, ...rest) {
        const mimeType = mime.getType(filename);

        if (!mimeType) {
            const fileExtension = path.extname(filename) || path.basename(filename);

            throw new Error(`Could not guess MIME type of ${fileExtension}.`);
        }

        const srcBase64 = Buffer.from(src).toString('base64');

        src = `
const dataUrl = ${JSON.stringify(`data:${mimeType};base64,${srcBase64}`)};

export default dataUrl;
`;

        return process(src, filename, ...rest).code;
    },
};
