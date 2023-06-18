import zlib from "zlib";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const compressFile = `${__dirname}\\files\\fileToCompress.txt`;
    const compressDestination = `${__dirname}\\files\\archive.gz`;

    const gz = zlib.createGzip();
    const readable = fs.createReadStream(compressFile);
    const writable = fs.createWriteStream(compressDestination);

    readable.pipe(gz).pipe(writable);
};

await compress();
