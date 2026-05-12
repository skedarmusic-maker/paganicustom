import * as ftp from "basic-ftp";

async function inspect() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        
        await client.cd("/public_html");
        console.log("Contents of /public_html:");
        const list = await client.list();
        list.forEach(i => console.log(i.type === 2 ? "DIR" : "FILE", i.name));
        
        for (const item of list) {
            if (item.name === "public" && item.type === 2) {
                console.log("\nContents of /public_html/public:");
                await client.cd("public");
                const sublist = await client.list();
                sublist.forEach(s => console.log(s.type === 2 ? "DIR" : "FILE", s.name));
                await client.cd("..");
            }
        }
    } catch(err) {
        console.error("Error:", err);
    } finally {
        client.close();
    }
}
inspect();
