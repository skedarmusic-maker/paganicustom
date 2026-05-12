import * as ftp from "basic-ftp";

async function listAll(client, currentPath) {
    console.log("LISTING:", currentPath);
    const list = await client.list(currentPath);
    for (const item of list) {
        if (item.name === "." || item.name === "..") continue;
        const fullItemPath = currentPath + (currentPath.endsWith("/") ? "" : "/") + item.name;
        console.log(item.type === 2 ? "DIR:" : "FILE:", fullItemPath);
        if (item.type === 2) {
            await listAll(client, fullItemPath);
        }
    }
}

async function start() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        await listAll(client, "/");
    } catch(err) {
        console.error("Error:", err);
    } finally {
        client.close();
    }
}
start();
