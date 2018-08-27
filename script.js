jQuery(document).ready(function () {

    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

});

document.body.onload = function () {

    setTimeout(function () {
        let preloader = document.querySelector('.preloader');
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';

        if (!preloader.classList.contains('loaded')) {
            preloader.classList.add('loaded');
        }

    }, 1000);
};