
let idiomaAtual = "pt" // começa em português

const textos = {
    pt: {
        sobreMim: "Sobre mim",
        conhecimentos: "Conhecimentos",
        projetos: "Projetos",
        contato: "Contato",    
        botaoIdioma: "English", 
        h1FirstSection: "Olá, eu sou o <br> <strong>Alisson Teles Fraga</strong>.",
        pFirstSection: "Entusiasta da tecnolgia e da programação, atuo como Desenvolvedor Front-End.",
        h2SecondSection: "Sobre mim",
        pSecondSection: "Me chamo Alisson Teles Fraga, tenho 19 anos, estou cursando Engenharia de software e estudando os conceitos de programação, como JavaScript, HTML e CSS, e criando projetos para consolidar o conhecimento.<br>Estou em busca de uma oportunidade na área de tecnologia.",
        h2ThirdSection: "Conhecimentos",
        liInglesThirdSection: "Inglês",
        h2FourthSection: "Meus Projetos",
        h2Footer: "Contato",
        btnFooter: "Copiar E-mail",
        pFooter: "E-mail copiado!",

                
    },
    en: {
        sobreMim: "About me",
        conhecimentos: "Skills",
        projetos: "Projects",
        contato: "Contact",
        botaoIdioma: "Portuguese",
        h1FirstSection: "Hello, i'm <br> <strong>Alisson Teles Fraga</strong>.",
        pFirstSection: "Technology and programming enthusiast, I work as a Front-End Developer.",
        h2SecondSection: "About me",
        pSecondSection: "My name is Alisson Teles Fraga, I am 19 years old, i am studying Software Engineering and programming concepts, such as JavaScript, HTML and CSS, and creating projects to consolidate my knowledge.<br>I am looking for an opportunity in the technology area.",
        h2ThirdSection: "Skills",
        liInglesThirdSection: "English",
        h2FourthSection: "My Projects",
        h2Footer: "Contact",
        btnFooter: "Copy Email",
        pFooter: "Email copied!"

    }
};

function alternarIdioma() {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt"; // Alterna o idioma

    
    //menu-pc
    document.getElementsByClassName("idioma-sobremim")[0].innerText = textos[idiomaAtual].sobreMim; 
    document.getElementsByClassName("idioma-conhecimentos")[0].innerText = textos[idiomaAtual].conhecimentos;
    document.getElementsByClassName("idioma-projetos")[0].innerText = textos[idiomaAtual].projetos;
    document.getElementsByClassName("idioma-contato")[0].innerText = textos[idiomaAtual].contato;
    //menu-mobile
    document.getElementsByClassName("idioma-sobremim-mobile")[0].innerText = textos[idiomaAtual].sobreMim; 
    document.getElementsByClassName("idioma-conhecimentos-mobile")[0].innerText = textos[idiomaAtual].conhecimentos;
    document.getElementsByClassName("idioma-projetos-mobile")[0].innerText = textos[idiomaAtual].projetos;
    document.getElementsByClassName("idioma-contato-mobile")[0].innerText = textos[idiomaAtual].contato;
    //textos
    document.getElementsByClassName("idioma-h1-first-section")[0].innerHTML = textos[idiomaAtual].h1FirstSection;
    document.getElementsByClassName("idioma-p-first-section")[0].innerText = textos[idiomaAtual].pFirstSection;
    document.getElementsByClassName("idioma-h2-second-section")[0].innerText = textos[idiomaAtual].h2SecondSection;
    document.getElementsByClassName("idioma-p-second-section")[0].innerHTML = textos[idiomaAtual].pSecondSection;
    document.getElementsByClassName("idioma-h2-third-section")[0].innerText = textos[idiomaAtual].h2ThirdSection;
    document.getElementsByClassName("idioma-li-ingles-third-section")[0].innerText = textos[idiomaAtual].liInglesThirdSection;
    document.getElementsByClassName("idioma-h2-fourth-section")[0].innerText = textos[idiomaAtual].h2FourthSection;
    document.getElementsByClassName("idioma-h2-footer")[0].innerText = textos[idiomaAtual].h2Footer;
    document.getElementsByClassName("idioma-btn-footer")[0].innerText = textos[idiomaAtual].btnFooter;
    document.getElementsByClassName("idioma-p-footer")[0].innerText = textos[idiomaAtual].pFooter;
    
    document.getElementById("mensagem").innerText = textos[idiomaAtual].pFooter;
    document.getElementById("mensagem").innerText = '';
    

    
    
    document.getElementById("btn-language").innerText = textos[idiomaAtual].botaoIdioma;
    document.getElementById("a-language").innerText = textos[idiomaAtual].botaoIdioma;
    
    
    //o método getElementsByClassName() retorna uma coleção de elementos (um array-like), Para corrigir isso, você precisa acessar o primeiro elemento da coleção, que pode ser feito com o índice [0]
    

}
