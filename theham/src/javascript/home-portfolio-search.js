let form = document.querySelector('.home__input');
let inputField = document.querySelector('.home__input-field');
let closeButton = document.querySelector('.fa-times-circle');
let submitButton = document.querySelector('.home__search-button');
let homeListItems = document.getElementsByClassName('home__list-item');
let homeLinks = document.getElementsByClassName('home__link');
let searchLink = document.querySelector('.home__list-item:nth-last-of-type(1) .home__link');
let grid = document.querySelector('.portfolio__grid');

let sizer = '.portfolio__grid-item--size-1';
let container = $('.portfolio__grid');

container.imagesLoaded(function () {
    container.masonry({
        itemSelector: '.portfolio__grid-item',
        columnWidth: sizer,
        percentPosition: true
    });
});


for (let i = 0; i < homeLinks.length; i++) {
    homeLinks[i].onmouseover = function () {
        homeListItems[i].style.borderBottomColor = '#18cfab';
    };
}

for (let i = 0; i < homeLinks.length; i++) {
    homeLinks[i].onmouseout = function () {
        homeListItems[i].style.borderBottomColor = 'transparent';
    };
}

searchLink.onclick = function () {
    form.style.display = 'initial';

    setTimeout(function () {
        inputField.focus();
    }, 500);

    setTimeout(function () {
        form.style.transform = 'scale(1, 1)';
        form.style.opacity = '1';
    }, 40);

    for (let i = 0; i < homeLinks.length; i++) {
        homeLinks[i].style.visibility = 'hidden';
    }
};

closeButton.onclick = function () {
    form.style.transform = 'scale(0, 0)';
    form.style.opacity = '0';
    inputField.value = '';

    setTimeout(function () {
        form.style.display = 'none';
    }, 600);

    setTimeout(function () {
        for (let i = 0; i < homeLinks.length; i++) {
            homeLinks[i].style.visibility = 'visible';
        }
    }, 300);
};

form.addEventListener('keydown', function (event) {

    if (event.keyCode === 27) {
        form.style.transform = 'scale(0, 0)';
        form.style.opacity = '0';
        inputField.value = '';

        setTimeout(function () {
            form.style.display = 'none';
        }, 600);

        setTimeout(function () {
            for (let i = 0; i < homeLinks.length; i++) {
                homeLinks[i].style.visibility = 'visible';
            }
        }, 300);

    } else if (event.keyCode === 13) {
        event.preventDefault();
        submitButton.style.transform = 'scale(0.9, 0.9)';
        submitButton.click();
        setTimeout(function () {
            inputField.value = '';
        }, 500)
    }
});

form.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitButton.style.transform = 'none';
    }
});

submitButton.addEventListener('mousedown', function (event) {
    submitButton.style.transform = 'scale(0.9, 0.9)';
});

submitButton.addEventListener('mouseup', function (event) {
    submitButton.style.transform = 'none';
});

submitButton.onclick = function () {
    const API_KEY = '9558735-7bfeb4596e35227dd21259b84';
    let req = inputField.value;
    const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(req);

    $.getJSON(URL, function (data) {
        $('.portfolio__grid-item').remove();
        let {totalHits, hits: [...rest]} = data;
        for (let i = 0; i < rest.length; i++) {
            let newGridItem = document.createElement('div');
            newGridItem.classList.add('portfolio__grid-item');
            newGridItem.classList.add('portfolio__grid-item--size-1');
            newGridItem.innerHTML = `<img src="${rest[i].webformatURL}" alt="" class="portfolio__image">`;
            grid.appendChild(newGridItem);
        }
        container.masonry('destroy');
        container.imagesLoaded().progress(function () {
            container.masonry({
                itemSelector: '.portfolio__grid-item',
                columnWidth: sizer,
                percentPosition: true
            });
        });
    });
    setTimeout(function () {
        inputField.value = '';
    }, 500)
};













