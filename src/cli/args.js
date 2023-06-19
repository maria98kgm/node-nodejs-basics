const parseArgs = () => {
    const cmdArgs = process.argv.slice(2);
    const parsedArgs = [];

    for (let i = 0; i < cmdArgs.length; i += 2) {
        parsedArgs.push(`${cmdArgs[i].slice(2)} is ${cmdArgs[i + 1]}`);
    }

    console.log(parsedArgs.join(", "));
};

parseArgs();
