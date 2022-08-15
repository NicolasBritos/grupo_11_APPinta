/* Header si el usuario esta logueado */

function showMenu(e) {
    const btnMenu = e.target.closest('.opt__account');
    const options = btnMenu.querySelector('.account__options');
    options.classList.toggle('show');
    e.stopPropagation();
}

function clickInBody() {
    const options = document.querySelector('button.opt__account > .account__options');
    options.classList.remove('show');
}

function loadHeader() {
    const body = document.getElementsByTagName('body')[0];
    const header = document.querySelector('header.header');
    const btnMenu = header.querySelector('button.opt__account');
    body.addEventListener('click', clickInBody);
    btnMenu.addEventListener('click', showMenu);
}

window.addEventListener('DOMContentLoaded', loadHeader);