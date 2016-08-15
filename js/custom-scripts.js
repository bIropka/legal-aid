$(document).ready(function () {

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle();
    });

    $('nav ul li a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        if($(window).width < 769) {
            $('html, body').stop().animate({scrollTop: $(target).offset().top}, 800);
        } else {
            $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1500);
        }

        return false;
    });

    $('.callback').click(function () {
        $('.window-callback').fadeIn();
    });

    $('.button-ask-question').click(function () {
        $('.window-ask-question').fadeIn();
    });

    $('.advantages .read-more').click(function () {
        $('.window-advantages').fadeIn();
    });

    $('.show-all-specialists').click(function () {
        $('.window-team').fadeIn();
        $('.slider-modal').slick('slickNext');
        setTimeout(function() {
            $('.modal-team-wrap').css('opacity', 1);
        }, 500);
    });

    $('.show-specialist').click(function() {
        $(this).siblings('.modal-window').fadeIn();
    });

    $('.modal-window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.modal-wrap')).length){
            $('.modal-window').fadeOut();
            $('.modal-team-wrap').css('opacity', 0);
        }
        if ($target.hasClass('close-marker')){
            $('.modal-window').fadeOut();
            $('.modal-team-wrap').css('opacity', 0);
        }
    });

    /** scripts for sliders **/

    $('.slider-services').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        pauseOnDotsHover: true,
        autoplay: false,
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
        autoplay: false,
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
                    arrows: false
                }
            }
        ]
    });

    $('.slider-certificates').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
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

    /*$('.slider-modal').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnDotsHover: true,
        autoplay: false,
        appendArrows: '.slider-modal-controls',
        prevArrow: '.slider-modal-left',
        nextArrow: '.slider-modal-right',
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    /** end of scripts for sliders **/

});