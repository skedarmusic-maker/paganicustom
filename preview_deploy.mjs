
import * as ftp from "basic-ftp";

async function deployPreviewFinal() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        console.log("Conectando ao FTP para o Deploy Definitivo...");
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            port: 21,
            secure: false
        });

        // O CAMINHO CORRETO: dentro da pasta pública
        const remoteFolder = "public_html/preview";

        console.log(`Limpando e subindo para: ${remoteFolder}`);
        await client.ensureDir(remoteFolder);
        await client.uploadFromDir("out", remoteFolder);

        console.log("\n✅ PREVIEW SUBIDO COM SUCESSO NO LUGAR CERTO!");
        console.log("Acesse agora por: https://paganicustom.com.br/preview/protecao-de-farol/");
    }
    catch(err) {
        console.error("Erro no deploy:", err);
    }
    finally {
        client.close();
    }
}

deployPreviewFinal();
