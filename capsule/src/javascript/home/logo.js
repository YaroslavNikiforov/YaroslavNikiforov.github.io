$(document).ready(function () {
    $('.home__logo').mousemove(function (e) {
        let box = $(this);
        let xAxis = e.pageX - box.offset().left;
        $('.mask').css({
            left: xAxis / 1.45,
            backgroundPosition: '+' + xAxis + 'px'
        })
    });
});




