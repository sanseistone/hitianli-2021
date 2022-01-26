$(document).ready(function () {
    //back-to-top
    window.onscroll = function () {
        var navigation_box = $(document).scrollTop();
        if (navigation_box > 200) {
            $(".navigation-box .back-to-top").css("display", "block");
        } else {
            $(".navigation-box .back-to-top").css("display", "none");
        }
    }
    $(".back-to-top").click(function () {
        $('body,html').animate({scrollTop: 0}, 500);
    });

    //lazyload
    $(function () {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    });

    //readmore-box
    $(function () {
        $('.readmore-box').readmore({
            speed: 75,
            collapsedHeight: 45,
            moreLink: '<div class="mt-3"><button class="d-inline-flex btn btn-sm btn-dark" type="button">More <img src="_assets/img/svg/chevron-down-white.svg" alt=""></button></div>',
            lessLink: '<div class="mt-3"><button class="d-inline-flex btn btn-sm btn-danger" type="button">Less <img src="_assets/img/svg/chevron-up-white.svg" alt=""></button></div>'
        });
    });

    //screen
    if (screen.width < 768) {
        $('.footer-menu .heading').click(function () {
            $(this).next('.list').slideToggle();
        });
    }

    //accordion
    $(function ($) {
        $(".accordion.item-box").click(function () {
            $(this).children(".content:not(:animated)").slideToggle('fast');
            $(this).toggleClass("open");
        });
    });
    $(function ($) {
        $(".accordion > dt").click(function () {
            $(this).next("dd:not(:animated)").slideToggle('fast');
            $(this).toggleClass("open");
        });
    });
});

$(document).ready(function () {
    //countdown
    $('.countdown-box').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('over');
    });
    $('.countdown-special').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('over');
    });
});

$(document).ready(function () {
    //owlCarousel
    $('.owl-ten').owlCarousel({
        loop: true,
        margin: 20,
        navText: ['<img src="_assets/img/svg/caret-left-fill.svg" alt="">', '<img src="_assets/img/svg/caret-right-fill.svg" alt="">'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true,
                dots: false
            },
            575: {
                items: 6,
                nav: true,
                dots: false
            },
            991: {
                items: 8,
                nav: true,
                dots: false
            },
            1199: {
                items: 10,
                nav: true,
                dots: false
            }
        }
    });
    $('.owl-eight').owlCarousel({
        loop: true,
        margin: 20,
        navText: ['<img src="_assets/img/svg/caret-left-fill.svg" alt="">', '<img src="_assets/img/svg/caret-right-fill.svg" alt="">'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                nav: true,
                dots: false
            },
            575: {
                items: 4,
                nav: true,
                dots: false
            },
            991: {
                items: 6,
                nav: true,
                dots: false
            },
            1199: {
                items: 8,
                nav: true,
                dots: false
            }
        }
    });
    $('.owl-six').owlCarousel({
        loop: true,
        margin: 20,
        navText: ['<img src="_assets/img/svg/caret-left-fill.svg" alt="">', '<img src="_assets/img/svg/caret-right-fill.svg" alt="">'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            575: {
                items: 3,
                nav: true,
                dots: false
            },
            991: {
                items: 5,
                nav: true,
                dots: false
            },
            1199: {
                items: 6,
                nav: true,
                dots: false
            }
        }
    });
    $('.owl-five').owlCarousel({
        loop: true,
        margin: 20,
        navText: ['<img src="_assets/img/svg/caret-left-fill.svg" alt="">', '<img src="_assets/img/svg/caret-right-fill.svg" alt="">'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
                dots: false
            },
            575: {
                items: 3,
                nav: true,
                dots: false
            },
            991: {
                items: 4,
                nav: true,
                dots: false
            },
            1199: {
                items: 5,
                nav: true,
                dots: false
            }
        }
    });
    $('.owl-four').owlCarousel({
        loop: true,
        margin: 20,
        navText: ['<img src="_assets/img/svg/caret-left-fill.svg" alt="">', '<img src="_assets/img/svg/caret-right-fill.svg" alt="">'],
        autoplay: true,
        autoplayTimeout: 50000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 5,
                nav: true,
                dots: false
            },
            575: {
                items: 3,
                margin: 10,
                nav: true,
                dots: false
            },
            991: {
                items: 4,
                margin: 15,
                nav: true,
                dots: false
            },
            1199: {
                items: 4,
                margin: 10,
                nav: true,
                dots: false
            }
        }
    });
});

$(document).ready(function () {
    //slider
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        asNavFor: '.slider-thumbs'
    });
    $('.slider-thumbs').slick({
        asNavFor: '.slider-main',
        // dots: true,
        vertical: true,
        verticalSwiping: true,
        // centerMode: true,
        centerPadding: '0',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        focusOnSelect: true,
    });
});