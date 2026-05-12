import * as ftp from "basic-ftp";

async function fix() {
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
        console.log("Root content:");
        list.forEach(i => console.log(i.type, i.name));
    } catch(err) {
        console.error("Error:", err);
    } finally {
        client.close();
    }
}
fix();
