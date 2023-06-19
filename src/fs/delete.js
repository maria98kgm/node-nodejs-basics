import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = `${__dirname}\\files\\fileToRemove.txt`;

    fs.unlink(filePath, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await remove();
