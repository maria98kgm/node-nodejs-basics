import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";
import os from "os";

const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const workerFile = `${__dirname}\\worker.js`;
    const cpuCores = os.cpus();
    const result = [];
    let logged = false;

    for (let i = 0; i < cpuCores.length; i++) {
        const worker = new Worker(workerFile, { workerData: i + 10 });

        worker.on("message", (res) => {
            result[i] = {
                status: "resolved",
                data: res,
            };
        });
        worker.on("error", () => {
            result[i] = {
                status: "error",
                data: null,
            };
        });
        worker.on("exit", () => {
            if (!logged && result.length === cpuCores.length && !result.includes(undefined)) {
                logged = true;
                console.log(result);
            }
        });
    }
};

await performCalculations();
