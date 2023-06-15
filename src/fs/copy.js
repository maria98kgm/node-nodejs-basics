import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderCopy = `${__dirname}\\files_copy`;
    const filesFolder = `${__dirname}\\files`;

    fs.mkdir(folderCopy, (err) => {
        if (err) throw new Error("FS operation failed");

        fs.readdir(filesFolder, (err, files) => {
            if (err) throw new Error("FS operation failed");

            files.forEach((file) => {
                let srcFile = `${filesFolder}/${file}`;
                let destFile = `${folderCopy}/${file}`;

                fs.copyFile(srcFile, destFile, () => null);
            });
        });
    });
};

await copy();
