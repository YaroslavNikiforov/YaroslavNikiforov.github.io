import $ from 'jquery';

const menuButton = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__list');
let homeLink = document.querySelector('.header__list-item:nth-of-type(1) .header__link');

menuButton.onmouseover = function () {
    menu.style.display = 'flex';
    menuButton.classList.add('header__menu-btn--active');
    setTimeout(function () {
        menu.style.transform = 'scaleY(1)';
        menu.style.opacity = '1';
        homeLink.focus();
    }, 40);
};

menu.onmouseleave = function (event) {
    if (!window.matchMedia("(min-width: 481px)").matches && event.relatedTarget != null) {
        menu.style.transform = 'scaleY(0)';
        menu.style.opacity = '0';
        setTimeout(function () {
            menu.style.display = 'none';
        }, 300);
        menuButton.classList.remove('header__menu-btn--active');
    }
};

/*$(document).ready(function () {
    $(menuButton).hover(function () {
        menu.style.display = 'flex';
        menuButton.classList.add('header__menu-btn--active');
        setTimeout(function () {
            menu.style.transform = 'scaleY(1)';
            menu.style.opacity = '1';
            homeLink.focus();
        }, 40);
    }, function () {
            menu.style.transform = 'scaleY(0)';
            menu.style.opacity = '0';
            setTimeout(function () {
                menu.style.display = 'none';
            }, 300);
            menuButton.classList.remove('header__menu-btn--active');
    });
});*/

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 480) {
        menu.style.display = 'flex';
        menu.style.transform = 'scaleY(1)';
        menu.style.opacity = '1';
    } else {
        menu.style.display = 'none';
        menu.style.transform = 'scaleY(0)';
    }
});
