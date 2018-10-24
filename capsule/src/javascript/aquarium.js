$(document).ready(function () {
    NProgress.start();
    $('.aquarium').ripples({
    });

    particlesJS.load('particles-js-one', 'particles-one.json', function () {
        console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-js-two', 'particles-two.json', function () {
        console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-js-three', 'particles-three.json', function () {
        console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-js-four', 'particles-four.json', function () {
        console.log('callback - particles.js config loaded');
    });

    particlesJS.load('particles-js-five', 'particles-five.json', function () {
        console.log('callback - particles.js config loaded');
    });
});