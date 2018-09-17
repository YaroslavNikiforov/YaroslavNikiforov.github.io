$(document).ready(function () {
    $('.aquarium').ripples({
    });

    particlesJS.load('particles-js-one', 'particles-one.json', function () {
        console.log('callback - particles.js config loaded');
    });
});