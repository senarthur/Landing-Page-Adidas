// Mudança das cores
const bg = document.querySelector('.bg');
const buttonBuy = document.querySelector('[data-buy-it]');
const shoe = document.querySelector('[data-shoe]');
const textAdidas = document.querySelector('[data-text]');

//Eventos
const toBlue = document.querySelector('.toBlue');
const toRed = document.querySelector('.toRed');
const toGreen = document.querySelector('.toGreen');

const main = document.querySelector('main');
const iconNavbar = document.querySelector('[data-navbar-icon]');
const nav = document.querySelector('nav');


function changeColor(tag, color) {
    if (tag === textAdidas) {
        tag.style.color = color;
        return
    }

    tag.style.backgroundColor = color;
}

function changeImage(image) {
    shoe.src = image;
}

toBlue.addEventListener('click', () => {
    changeColor(buttonBuy, '#0064A3');
    changeColor(bg, '#0064A3');
    changeColor(textAdidas, '#0064A3');
    changeImage('images/blue.png')
})

toRed.addEventListener('click', () => {
    changeColor(buttonBuy, '#5D2739');
    changeColor(bg, '#5D2739');
    changeColor(textAdidas, '#5D2739');
    changeImage('images/red.png')
})

toGreen.addEventListener('click', () => {
    changeColor(buttonBuy, '#1F5B56');
    changeColor(bg, '#1F5B56');
    changeColor(textAdidas, '#1F5B56');
    changeImage('images/green.png')
})

iconNavbar.addEventListener('click', () => nav.classList.toggle('none'));
main.addEventListener('click', () => nav.classList.add('none'));
window.addEventListener('scroll', () => nav.classList.add('none'));