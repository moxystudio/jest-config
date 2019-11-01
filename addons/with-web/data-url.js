'use strict';

const fs = require('fs');
const mime = require('mime');
const path = require('path');

module.exports = {
    process(src, filename) {
        const mimeType = mime.getType(filename);

        if (mimeType == null) {
            const fileExtension = path.extname(filename) || path.basename(filename);

            throw new Error(`Could not guess MIME type of ${fileExtension}`);
        }

        return `module.exports = ${JSON.stringify(`data:${mimeType};base64,${fs.readFileSync(filename).toString('base64')}`)};`;
    },
};
