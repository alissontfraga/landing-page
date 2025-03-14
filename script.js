document.getElementById("copiar").addEventListener("click", copiarEmail);

function copiarEmail() {
    const email = "alissontfraga@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        document.getElementById("mensagem").innerText = "E-mail copiado!";
        setTimeout(() => {
            document.getElementById("mensagem").innerText = "";
        }, 4000);
    }).catch(erro => {
        console.error("Erro ao copiar o e-mail:", erro);
    });
}
