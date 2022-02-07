$(document).ready(function () {
    if (screen.width >= 992) {
        $(".header-bar .bar-block").removeClass("hide").addClass("show");
        $(".header-bar .click-btn").removeClass("show").addClass("hide");
    } else {
        $(".header-bar .bar-block").removeClass("show").addClass("hide");
        $(".header-bar .click-btn").removeClass("hide").addClass("show");
    }

    $('.nav-main li.dropdown').mouseover(function () {
        $(this).children(".dropdown-menu").addClass('show');
    }).mouseout(function () {
        $(this).children(".dropdown-menu").removeClass('show');
    });
});

$(document).ready(function () {
    //back-to-top
    window.onscroll = function () {
        var navigation_box = $(document).scrollTop();
        if (navigation_box > 200) {
            $(".navigation-box .back-to-top").css("display", "block");
        } else {
            $(".navigation-box .back-to-top").css("display", "none");
        }

        if ($(window).scrollTop() >= 160 && screen.width < 768) {
            $("header .keywords").addClass("hide");
            $("header .logo").addClass("col-8").removeClass("col-6");
            $("header .logo .tips").css("display",("none"));
            $("header .contact").css("display",("none"));
            $("header .search").addClass("col-4").removeClass("col-12");
            $("header .search .search-block").css("display",("none"));
            $("header").removeClass("py-2");
            $("header .row").removeClass("gy-2");

            $('.product-description .nav-tabs .nav-link').click(function() {
                $('html,body').animate({ scrollTop: $("#nav-tabContent").offset().top - 47}, 200)
            });
        } else {
            $("header .keywords").removeClass("hide");
            $("header .logo").addClass("col-6").removeClass("col-8");
            $("header .logo .tips").css("display",("block"));
            $("header .contact").css("display",("flex"));
            $("header .search").addClass("col-12").removeClass("col-4");
            $("header .search .search-block").css("display",("flex"));
            $("header").addClass("py-2");
            $("header .row").addClass("gy-2");
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
            collapsedHeight: 66,
            moreLink: '<div class="mt-2 more"><button class="d-inline-flex btn btn-sm btn-dark" type="button">More <img src="_assets/img/svg/chevron-down-white.svg" alt=""></button></div>',
            lessLink: '<div class="mt-2 less"><button class="d-inline-flex btn btn-sm btn-danger" type="button">Less <img src="_assets/img/svg/chevron-up-white.svg" alt=""></button></div>'
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
        alert('カウントダウン!');
    });
    $('.countdown-special').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('カウントダウン!');
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
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        focusOnSelect: true,
    });
});
