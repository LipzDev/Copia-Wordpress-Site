// EVENTO DO SCROLL PARA DESCER//

const linksInternos = document.querySelectorAll('.header-content a[href^="#"');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: "smooth",
    });
}


linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});



// EVENTO DO SCROLL PARA RETORNAR //



const buttonReturn = document.querySelectorAll('.button-return a[href^="#"');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: "smooth",
    });
}


buttonReturn.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});



// VER PLANOS EFEITO DE SCROLL //

const returnToPlans = document.querySelectorAll('.bg-servico-itens a[href^="#"');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: "smooth",
    });
}


returnToPlans.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});


// EVENTO DE DESCOLAR O HEADER //

window.addEventListener('scroll', function(){
    let header = document.querySelector('.header-content');
    header.classList.toggle('header-modular', window.scrollY > 0)
});

// ANIMAÇÃO AO DESCER A PAGINA (FOTOS)//

function initAnimacaoScroll() {

const eventoFotos = document.querySelectorAll('.js-scroll');
if(eventoFotos.length) {
const windowMetade = window.innerHeight * 0.5;

function animaScroll() {
    eventoFotos.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;        
        
        if(sectionTop < 452) {
            section.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();

// NUMEROS AUMENTANDO SOZINHOS //
initAnimaNumeros();

function initAnimaNumeros() {

const numeros = document.querySelectorAll('.numeros');

numeros.forEach((numeros) => {
    const total = numeros.innerText;

    let start = 0;
    const timer = setInterval(() => {
        start++;
        numeros.innerText = start;
        if(start > total) {
            numeros.innerText = total;
            clearInterval(timer)
        }
         
    }, 25);
    console.log(total)
});

}

// APARECER MENSAGEM //






