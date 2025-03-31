document.getElementById("copiar").addEventListener("click", copiarEmail);

function copiarEmail() {
    const email = "alissontfraga@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        document.getElementById("mensagem").innerText = textos[idiomaAtual].pFooter; 
        setTimeout(() => {
            document.getElementById("mensagem").innerText = ""; 
        }, 4000);
    }).catch(erro => {
        console.error("Erro ao copiar o e-mail:", erro);
    });
}

function getProjects(){
    const urlGitHub = 'https://api.github.com/users/alissontfraga/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            showProjects(response)
            loadingElement.style.display = 'none'
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')
    for(let i = 0; i < data.length; i++)
    {
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        div.appendChild(a)
        listElement.appendChild(div)
    }
}

getProjects()


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuIcon = document.getElementById('menu-icon');
    let closeIcon = document.getElementById('x-icon');
    menuMobile.classList.toggle('open');

    // Alterna a visibilidade dos ícones
    if (menuMobile.classList.contains('open')) {
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}
