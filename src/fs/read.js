import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = `${__dirname}\\files\\fileToRead.txt`;

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) throw new Error("FS operation failed");

        console.log(data);
    });
};

await read();
