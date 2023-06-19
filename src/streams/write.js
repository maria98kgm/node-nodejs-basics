import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = `${__dirname}\\files\\fileToWrite.txt`;

    const writableStream = fs.createWriteStream(filePath);

    process.stdin.on("data", (data) => {
        writableStream.write(data.toString());
        process.exit();
    });
};

await write();
