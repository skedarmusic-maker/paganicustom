import * as ftp from "basic-ftp";

async function explore() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        
        console.log("Current DIR:", await client.pwd());
        const list = await client.list();
        
        // Find if there is a public_html inside public_html
        const publicHtmlDir = list.find(f => f.name === "public_html" || f.name === "public.html" || f.name === "out");
        if (publicHtmlDir) {
            console.log("FOUND ERRONEOUS DIR:", publicHtmlDir.name);
            await client.cd(publicHtmlDir.name);
            const sublist = await client.list();
            console.log("Contents of", publicHtmlDir.name, sublist.map(s => s.name));
            
            // Should I delete it?
            await client.cd("..");
            console.log("Removing", publicHtmlDir.name, "...");
            await client.removeDir(publicHtmlDir.name);
            console.log("Removed!");
        } else {
            console.log("No nested public_html or out found in", await client.pwd());
        }

    } catch(err) {
        console.error("Error:", err);
    } finally {
        client.close();
    }
}
explore();
