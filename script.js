function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

function decidirBotao() {
    if(window.scrollY === 0) {
        document.querySelector('.scroll').style.display = 'none';
    } else {
        document.querySelector('.scroll').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotao);