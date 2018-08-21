let cards = document.getElementsByClassName('card');
let fronts = document.getElementsByClassName('front');
let backs = document.getElementsByClassName('back');


for (let i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function () {
        fronts[i].style.transform = 'rotateY(180deg)';
        backs[i].style.transform = 'rotateY(360deg)';
    }
}
