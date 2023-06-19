import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = `${__dirname}\\files`;

    fs.readdir(folderPath, (err, files) => {
        if (err) throw new Error("FS operation failed");

        console.log(files);
    });
};

await list();
