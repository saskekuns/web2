const menu = document.getElementById('menu');

function cross() {
    menu.classList.toggle('menu__active');
}

menu.addEventListener('click', cross);






const hospital = document.getElementById('hospital');
const myHome = document.getElementById('my__home');
const hospitalText = document.querySelector('.hospital-text');
const myHomeText = document.querySelector('.my__home-text');

function handleElementClick(element, textElement) {
    element.addEventListener('click', function () {
        textElement.classList.toggle('text-active');
    });
}

handleElementClick(hospital, hospitalText);
handleElementClick(myHome, myHomeText);