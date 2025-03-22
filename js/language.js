
let idiomaAtual = "pt" // começa em português

const textos = {
    pt: {
        sobreMim: "Sobre mim",
        conhecimentos: "Conhecimentos",
        projetos: "Projetos",
        contato: "Contato",    
        botaoIdioma: "English", 
                
                
    },
    en: {
        sobreMim: "About me",
        conhecimentos: "Skills",
        projetos: "Projects",
        contato: "Contact",
        botaoIdioma: "Portuguese",
    }
};

function alternarIdioma() {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt"; // Alterna o idioma

    document.getElementsByClassName("idioma-sobremim")[0].innerText = textos[idiomaAtual].sobreMim; 
    document.getElementsByClassName("idioma-conhecimentos")[0].innerText = textos[idiomaAtual].conhecimentos;
    document.getElementsByClassName("idioma-projetos")[0].innerText = textos[idiomaAtual].projetos;
    document.getElementsByClassName("idioma-contato")[0].innerText = textos[idiomaAtual].contato;
    

    document.getElementById("btn-language").innerText = textos[idiomaAtual].botaoIdioma;
    
    
    //o método getElementsByClassName() retorna uma coleção de elementos (um array-like), Para corrigir isso, você precisa acessar o primeiro elemento da coleção, que pode ser feito com o índice [0]
    

}