import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { createHash } from "node:crypto";

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = `${__dirname}\\files\\fileToCalculateHashFor.txt`;

    fs.readFile(filePath, "utf-8", (err, data) => {
        console.log(createHash("sha256").update(data).digest("hex"));
    });
};

await calculateHash();
