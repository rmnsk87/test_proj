// 1. Navigation & Menu
const burgerBtn = document.querySelector('.burger-menu');
const sideMenu = document.querySelector('.side-menu');
const menuCloseBtn = document.querySelector('.close-btn');
const menuOverlay = document.querySelector('.menu-overlay');

// 2. Search Modal Elements
const searchTrigger = document.querySelector('.mysearch');
const searchModal = document.getElementById('searchModal');
const modalCloseBtn = document.querySelector('.close-modal');
const searchInput = document.getElementById('searchInput');

/* --- FUNCTIONS --- */

// Toggle Side Menu (Left)
function toggleMenu() {
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

// Search Modal Window
function openSearch(e) {
    e.preventDefault(); // 
    searchModal.classList.add('active');

    // Auto-focus: Put cursor in the box automatically
    setTimeout(() => {
        searchInput.focus();
    }, 100);
}

// Close Search Modal
function closeSearch() {
    searchModal.classList.remove('active');
}

/* --- EVENT LISTENERS --- */

// Menu Listeners
burgerBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Search Modal Listeners
searchTrigger.addEventListener('click', openSearch);
modalCloseBtn.addEventListener('click', closeSearch);

// Close Modal if user clicks on the dark background (outside the box)
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        closeSearch();
    }
});

// Close Modal if user presses 'Escape' key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearch();
    }
});