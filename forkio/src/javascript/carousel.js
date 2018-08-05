const leftButton = document.querySelector('.carousel__marker--left');
const rightButton = document.querySelector('.carousel__marker--right');

leftButton.onclick = function () {
    showItems(slideIndex += -1);
};

rightButton.onclick = function () {
    showItems(slideIndex += 1);
};

let slideIndex = 1;
showItems(slideIndex);

function showItems(index) {
    let item = document.getElementsByClassName("carousel__item");
    if (index > item.length) {
        slideIndex = 1
    }
    if (index < 1) {
        slideIndex = item.length
    }

    for (let i = 0; i < item.length; i++) {
        item[i].style.display = 'none';
        item[i].style.opacity = '0'
    }

    item[slideIndex - 1].style.display = 'flex';
    setTimeout(function () {
        item[slideIndex - 1].style.opacity = '1';
    }, 40);
}