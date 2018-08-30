jQuery(document).ready(function () {

    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

});

document.body.onload = function () {

    setTimeout(function () {
        let preloader = document.querySelector('.preloader');

        if (!preloader.classList.contains('loaded')) {
            preloader.classList.add('loaded');
        }

    }, 1000);
};

let keys = document.getElementsByClassName('key');

(function () {
    let rotateY = 0,
        rotateX = 0;

    document.onkeydown = function (e) {
        if (e.keyCode === 37) {
            rotateY += 90;
        } else if (e.keyCode === 38) {
            rotateX -= 90;
        } else if (e.keyCode === 39) {
            rotateY -= 90;
        } else if (e.keyCode === 40) {
            rotateX += 90;
        }

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    keys[0].onclick = function (e) {
        rotateY += 90;

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    keys[1].onclick = function (e) {
        rotateX -= 90;

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    keys[2].onclick = function (e) {
        rotateY -= 90;

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    keys[3].onclick = function (e) {
        rotateX += 90;

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

})();
