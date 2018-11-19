let keys = document.getElementsByClassName('portfolio__key');
let keyTip = document.body.querySelector('.portfolio__keys-tip');

$(document).ready(function () {

    particlesJS.load('particles-space-one', 'src/json/portfolio.json');
    particlesJS.load('particles-space-two', 'src/json/portfolio.json');

    for (let i = 0; i < keys.length; i++) {
        $(keys[i]).hover(function () {
            keys[i].style.boxShadow = '0 0 10px white';
            keyTip.style.opacity = '1';
        }, function () {
            keys[i].style.boxShadow = '0 0 5px white';
            keyTip.style.opacity = '0';
        })
    }

});

(function () {
    let rotateY = 0,
        rotateX = 0;

    document.onkeydown = function (e) {
        keyTip.style.opacity = '0';
        if (e.keyCode === 37) {
            keys[0].classList.add('key-active');
            rotateY += 90;
        } else if (e.keyCode === 38) {
            e.preventDefault();
            keys[1].classList.add('key-active');
            rotateX -= 90;
        } else if (e.keyCode === 39) {
            keys[2].classList.add('key-active');
            rotateY -= 90;
        } else if (e.keyCode === 40) {
            e.preventDefault();
            keys[3].classList.add('key-active');
            rotateX += 90;
        }

        document.querySelector('.portfolio__cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    document.onkeyup = function (e) {
        if (e.keyCode === 37) {
            keys[0].classList.remove('key-active');
        } else if (e.keyCode === 38) {
            keys[1].classList.remove('key-active');
        } else if (e.keyCode === 39) {
            keys[2].classList.remove('key-active');
        } else if (e.keyCode === 40) {
            keys[3].classList.remove('key-active');
        }
    };

    keys[0].onclick = function (e) {
        rotateY += 90;

        document.querySelector('.portfolio__cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    keys[1].onclick = function (e) {
        rotateX -= 90;

        document.querySelector('.portfolio__cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    keys[2].onclick = function (e) {
        rotateY -= 90;

        document.querySelector('.portfolio__cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

    keys[3].onclick = function (e) {
        rotateX += 90;

        document.querySelector('.portfolio__cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    };

})();
