// 1. Select elements from the DOM
const burgerBtn = document.querySelector('.burger-menu');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.menu-overlay');

// 2. Define the toggle function
function toggleMenu() {
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 3. Add Event Listeners
burgerBtn.addEventListener('click', toggleMenu); // Click Burger -> Open
closeBtn.addEventListener('click', toggleMenu); // Click X -> Close
overlay.addEventListener('click', toggleMenu); // Click dark background -> Close