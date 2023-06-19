import zlib from "zlib";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const compressedFile = `${__dirname}\\files\\archive.gz`;
    const decompressDestination = `${__dirname}\\files\\fileToCompress.txt`;

    const gz = zlib.createGunzip();
    const readable = fs.createReadStream(compressedFile);
    const writable = fs.createWriteStream(decompressDestination);

    readable.pipe(gz).pipe(writable);
};

await decompress();
