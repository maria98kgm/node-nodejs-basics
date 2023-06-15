import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = `${__dirname}\\files\\wrongFilename.txt`;
    const newFilePath = `${__dirname}\\files\\properFilename.md`;

    fs.rename(filePath, newFilePath, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await rename();
