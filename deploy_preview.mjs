import * as ftp from "basic-ftp";

async function deployPreview() {
    console.log("🚀 Iniciando o Deploy de PREVIEW para Hostinger FTP...");
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.paganicustomsite",
            password: "1q2w3e4r@@@SK",
            secure: false,
            secureOptions: { rejectUnauthorized: false }
        });
        
        console.log("\nNavegando para public_html...");
        try {
            await client.cd("public_html");
        } catch (e) {
            console.log("A pasta public_html não foi encontrada ou já estamos dentro dela.");
        }

        console.log("\nAcessando/Criando a pasta 'preview'...");
        try {
            await client.ensureDir("preview");
        } catch (e) {
            console.log("Erro ao criar a pasta preview:", e);
        }

        // Limpa a pasta preview antiga antes de subir a nova (opcional mas recomendado)
        try {
            await client.clearWorkingDir();
        } catch (e) {
            console.log("Pasta preview já estava vazia ou erro ao limpar.");
        }

        console.log("\nFazendo upload da versão de testes (pasta /out)...");
        await client.uploadFromDir("out");
        
        console.log("\n✅ DEPLOY DE PREVIEW CONCLUÍDO COM SUCESSO!");
        console.log("🔗 Seu cliente já pode ver a versão de testes em: https://paganicustomfloripa.com.br/preview");
    }
    catch(err) {
        console.log("\n❌ Erro durante o processo FTP:");
        console.error(err);
    }
    client.close();
}

deployPreview();
