import * as ftp from "basic-ftp";

async function run() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        console.log("Conectando ao FTP...");
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });
        
        const currentFolder = await client.pwd();
        console.log("Diretório inicial do FTP:", currentFolder);
        
        // 1. Limpar tudo no diretório atual (que é o diretório raiz apontado pela conta FTP)
        console.log("Limpando diretório atual...");
        const items = await client.list();
        for (const item of items) {
            if (item.name === "." || item.name === "..") continue;
            if (item.isDirectory) {
                await client.removeDir(item.name);
            } else {
                await client.remove(item.name);
            }
        }
        console.log("Diretório limpo com sucesso.");

        // 2. Fazer o upload dos arquivos da pasta 'out/' diretamente no diretório atual
        console.log("Fazendo upload da pasta local 'out/' para o diretório atual...");
        await client.uploadFromDir("out");
        console.log("Upload concluído com sucesso!");

        // 3. Listar os arquivos para verificação
        const finalItems = await client.list();
        console.log("Conteúdo final do diretório principal:", finalItems.map(f => f.name));

    } catch (e) {
        console.error("Erro no deploy:", e);
    } finally {
        client.close();
    }
}
run();
