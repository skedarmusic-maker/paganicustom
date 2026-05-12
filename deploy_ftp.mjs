import * as ftp from "basic-ftp";

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        console.log("Connecting to FTP...");
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });

        console.log("Navigating to root folder. Uploading contents of local 'out/' folder...");

        // Upload the contents of 'out' (files + folders) inside root
        await client.uploadFromDir("out");

        console.log("Upload completed successfully! Deployment is done.");
    }
    catch(err) {
        console.error("Error during deployment:", err);
    }
    finally {
        client.close();
    }
}

deploy();
