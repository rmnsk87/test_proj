const burgerBtn = document.querySelector('.burger-menu');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.menu-overlay');


function toggleMenu() {

    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

/* --- EVENT LISTENERS --- */

burgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);