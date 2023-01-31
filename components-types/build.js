import { compileFromFile } from 'json-schema-to-typescript';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

const basePath = 'components-api/api/';

function generateFile(file) {
    // compile from file
    compileFromFile(`${basePath}${file}`, {
        cwd: basePath
    })
        .then(ts => {
            const tsFile = `src/${file.replace(/\.schema\.json$/, '.d.ts')}`;
            mkdir(path.dirname(tsFile), {
                recursive: true
            });
            return writeFile(tsFile, ts);
        });
}

generateFile('component.schema.json');