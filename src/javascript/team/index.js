var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        slidesPerView: 'auto',
        loop: true
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


$('.swiper-slide').hover(
    function () {
        if ($(this).hasClass('swiper-slide-active')) {
            $('.team__content', this).css("bottom", "0")
        }
    },

    function () {
        $('.team__content', this).css("bottom", "-100%")
    }
);

$('.swiper-slide').mousemove(function () {
    if ($(this).hasClass('swiper-slide-active')) {
        $('.team__content', this).css("bottom", "0")
    }
});
