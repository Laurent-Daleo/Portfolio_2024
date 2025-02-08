document.querySelector('.burger_icon').addEventListener('click', function () {
    const menu = document.querySelector('.menu_nav-burger');
    menu.classList.toggle('active');
});

const menu = document.querySelector('.menu_nav-burger');
const navLinks = document.querySelectorAll('.nav_burger-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});