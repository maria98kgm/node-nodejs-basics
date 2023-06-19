import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = `${__dirname}\\files\\fresh.txt`;

    fs.writeFile(filePath, "I am fresh and young", { flag: "wx+" }, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await create();
