$(document).ready(function () {


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

    /** end of scripts for sliders **/

});