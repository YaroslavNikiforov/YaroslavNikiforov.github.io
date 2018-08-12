$('.menu-btn').on('click', function () {
    $(this).toggleClass('menu-btn-active');
    $('.top-menu').toggleClass('top-menu-opened');
    setTimeout(function () {
        $('.top-menu').toggleClass('top-menu-show');
    }, 400);
});