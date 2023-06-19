import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const asyncIterator = async (readable) => {
    let str = "";

    for await (const chunk of readable) {
        str += chunk;
    }

    process.stdout.write(str);
};

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = `${__dirname}\\files\\fileToRead.txt`;

    const readable = fs.createReadStream(filePath, "utf8");
    asyncIterator(readable);
};

await read();
