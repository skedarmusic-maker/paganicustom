import * as ftp from "basic-ftp";

async function rmDirRecursive(client, dirPath) {
    const list = await client.list(dirPath);
    for (const item of list) {
        if (item.name === "." || item.name === "..") continue;
        const currentPath = dirPath + "/" + item.name;
        if (item.isDirectory) {
            await rmDirRecursive(client, currentPath);
            await client.removeDir(currentPath);
        } else {
            await client.remove(currentPath);
        }
    }
}

async function clean() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        
        await client.cd("/");
        const list = await client.list();
        
        // Everything EXCEPT public_html should be deleted from /
        for (const item of list) {
            if (item.name === "public_html" || item.name === "." || item.name === "..") {
                continue;
            }
            if (item.isDirectory) {
                console.log("Removing dir:", item.name);
                await rmDirRecursive(client, "/" + item.name);
                await client.removeDir("/" + item.name);
            } else {
                console.log("Removing file:", item.name);
                await client.remove("/" + item.name);
            }
        }
        console.log("Cleanup complete!");
        
        console.log("Entering public_html and starting correct upload...");
        await client.cd("public_html");
        await client.uploadFromDir("out");
        console.log("Upload completed inside public_html successfully!");

    } catch(err) {
        console.error("Error:", err);
    } finally {
        client.close();
    }
}
clean();
