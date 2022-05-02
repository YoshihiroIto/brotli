import fs from 'fs';
import { brotliCompressSync } from 'zlib';
import process from 'process';
if (process.argv.length != 3) {
    console.log('error');
    process.exit(1);
}
const inputFile = process.argv[2];
const input = fs.readFileSync(inputFile);
const compressed = brotliCompressSync(input);
fs.writeFile(inputFile + '.brotli', compressed, () => { });
//# sourceMappingURL=main.js.map