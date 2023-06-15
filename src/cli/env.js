const parseEnv = () => {
    const logStr = [];

    Object.keys(process.env).forEach((envVar) => {
        if (/^RSS_/.test(envVar)) logStr.push(`${envVar}=${process.env[envVar]}`);
    });

    console.log(logStr.join("; "));
};

parseEnv();
