import * as ftp from "basic-ftp";

async function deep() {
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
        console.log("Root / content:", (await client.list()).map(f => f.name));
        
        await client.cd("/public_html");
        console.log("/public_html content:", (await client.list()).map(f => f.name));

        const list = await client.list();
        for (const file of list) {
            if (file.isDirectory) {
                await client.cd(file.name);
                const sub = (await client.list()).map(f => f.name);
                console.log(`/public_html/${file.name} content:`, sub);
                await client.cd("..");
            }
        }
    } catch(err) {
        console.error("Error:", err);
    } finally {
        client.close();
    }
}
deep();
