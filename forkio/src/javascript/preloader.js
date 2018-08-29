document.body.onload = function () {

    setTimeout(function () {
        let preloader = document.querySelector('.preloader');

        if (!preloader.classList.contains('loaded')) {
            preloader.classList.add('loaded');
        }

    }, 1000);
};