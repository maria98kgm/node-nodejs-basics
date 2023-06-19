import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const scriptFile = `${__dirname}\\files\\script.js`;

    const script = spawn("node", [scriptFile, ...args]);

    process.stdin.pipe(script.stdin);
    script.stdout.pipe(process.stdout);
};

spawnChildProcess(["1", "2"]);
