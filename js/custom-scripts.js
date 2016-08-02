$(document).ready(function () {

    $('.callback').click(function () {
        $('.window-callback').fadeIn();
    });

    $('.button-ask-question').click(function () {
        $('.window-ask-question').fadeIn();
    });

    $('.modal-window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.modal-wrap')).length) $('.modal-window').fadeOut();
        if ($target.hasClass('close-marker')) $('.modal-window').fadeOut();
    });

    /** scripts for sliders **/

    $('.slider-services').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        pauseOnDotsHover: true,
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: '.slider-services-controls',
        prevArrow: '.slider-services-left',
        nextArrow: '.slider-services-right',
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: '.slider-reviews-controls',
        prevArrow: '.slider-reviews-left',
        nextArrow: '.slider-reviews-right',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 600,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
        ]
    });

    $('.slider-certificates').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: '.slider-certificates-controls',
        prevArrow: '.slider-certificates-left',
        nextArrow: '.slider-certificates-right',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /** end of scripts for sliders **/

});