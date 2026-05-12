import * as ftp from "basic-ftp";

async function run() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        
        console.log("IN ROOT:", await client.pwd());
        
        // 1. DELETE EVERYTHING at ROOT
        const rootItems = await client.list();
        for (const i of rootItems) {
            if (i.name === "." || i.name === "..") continue;
            if (i.isDirectory) await client.removeDir(i.name);
            else await client.remove(i.name);
        }
        console.log("CLEANED ROOT.");

        // 2. CREATE public_html (Underscore) - NO public.html (Dot)
        await client.send("MKD public_html");
        console.log("CREATED public_html.");

        // 3. ENTER public_html
        await client.cd("public_html");
        console.log("ENTERED public_html.");

        // 4. UPLOAD contents of local 'out/' folder
        // The contents are: index.html, images/, _next/, etc.
        // No 'public/' folder exists in out/.
        await client.uploadFromDir("out");
        console.log("UPLOADED contents of out/ to public_html/.");

        // 5. LIST to verify
        const final = await client.list();
        console.log("FINAL CONTENTS of /public_html:", final.map(f => f.name));

    } catch (e) {
        console.error("ERRO:", e);
    } finally {
        client.close();
    }
}
run();
