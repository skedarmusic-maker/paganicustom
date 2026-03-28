import * as ftp from "basic-ftp";

async function deploy() {
    console.log("Connecting to FTP...");
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "ftp.mediumblue-butterfly-118465.hostingersite.com",
            user: "u786839041.paganicustom",
            password: "1q2w3e4r@@@SK",
            secure: true,
            secureOptions: { rejectUnauthorized: false }
        });
        
        console.log("\nNavigation to public_html...");
        
        try {
            await client.cd("public_html");
        } catch (e) {
            console.log("Could not cd to public_html, it may not exist or we are already inside it.");
            // We might already be inside the public_html directory depending on Hostinger FTP isolation.
        }

        console.log("\nUploading project files from the /out folder...");
        await client.uploadFromDir("out");
        
        console.log("\nDeploy completed successfully! All assets uploaded to Hostinger.");
    }
    catch(err) {
        console.log("\nDetailed Error during FTP Process:");
        console.error(err);
    }
    client.close();
}

deploy();
