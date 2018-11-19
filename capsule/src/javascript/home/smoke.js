$('.home__smoke-word').mouseenter(function () {
    let smokeLetters = $('.home__smoke-letter', this);
    smokeLetters.css({
        animation: 'smoke 2s linear forwards',
    });

    let delay = 0;
    for (let i = 0; i < smokeLetters.length; i++) {
        smokeLetters[i].style.animationDelay = `${delay}s`;
        delay += 0.1;
    }
});

$('.home').mouseleave(function () {
    $('.home__smoke-letter').css('animation', '');
});