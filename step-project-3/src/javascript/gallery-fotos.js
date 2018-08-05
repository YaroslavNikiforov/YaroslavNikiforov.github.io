let listItems = document.getElementsByClassName('gallery__list-item');
let list = document.querySelector('.gallery__list');

list.onmouseover = function () {
    list.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(60px) translateX(0px)';
};

list.onmouseout = function () {
    list.style.transform = 'rotateX(30deg) translateY(-70px)';
};

listItems[0].onclick = function () {
    listItems[0].classList.toggle('gallery__list-item-zoom--top-left')
};

listItems[0].onblur = function () {
    listItems[0].classList.remove('gallery__list-item-zoom--top-left')
};

listItems[1].onclick = function () {
    listItems[1].classList.toggle('gallery__list-item-zoom--top')
};

listItems[1].onblur = function () {
    listItems[1].classList.remove('gallery__list-item-zoom--top')
};

listItems[2].onclick = function () {
    listItems[2].classList.toggle('gallery__list-item-zoom--top-right')
};

listItems[2].onblur = function () {
    listItems[2].classList.remove('gallery__list-item-zoom--top-right')
};

listItems[3].onclick = function () {
    listItems[3].classList.toggle('gallery__list-item-zoom--center-left')
};

listItems[3].onblur = function () {
    listItems[3].classList.remove('gallery__list-item-zoom--center-left')
};

listItems[4].onclick = function () {
    listItems[4].classList.toggle('gallery__list-item-zoom--center')
};

listItems[4].onblur = function () {
    listItems[4].classList.remove('gallery__list-item-zoom--center')
};

listItems[5].onclick = function () {
    listItems[5].classList.toggle('gallery__list-item-zoom--center-right')
};

listItems[5].onblur = function () {
    listItems[5].classList.remove('gallery__list-item-zoom--center-right')
};

listItems[6].onclick = function () {
    listItems[6].classList.toggle('gallery__list-item-zoom--bottom-left')
};

listItems[6].onblur = function () {
    listItems[6].classList.remove('gallery__list-item-zoom--bottom-left')
};

listItems[7].onclick = function () {
    listItems[7].classList.toggle('gallery__list-item-zoom--bottom')
};

listItems[7].onblur = function () {
    listItems[7].classList.remove('gallery__list-item-zoom--bottom')
};

listItems[8].onclick = function () {
    listItems[8].classList.toggle('gallery__list-item-zoom--bottom-right')
};

listItems[8].onblur = function () {
    listItems[8].classList.remove('gallery__list-item-zoom--bottom-right')
};

