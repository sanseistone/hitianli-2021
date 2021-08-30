$(document).ready(function () {
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

    $(function() {
        $("img.lazy").lazyload({
            effect : "fadeIn"
        });
    });

    $(function() {
        $('.readmore-box').readmore({
            speed: 75,
            collapsedHeight: 0,
            moreLink: '<div class="d-grid"><button class="btn btn-dark" type="button">More <img src="_assets/img/svg/chevron-down-white.svg" alt=""></button></div>',
            lessLink: '<div class="d-grid"><button class="btn btn-danger" type="button">Less <img src="_assets/img/svg/chevron-up-white.svg" alt=""></button></div>'
        });
    });

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
    $('.owl-four').owlCarousel({
        loop: true,
        margin: 30,
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
                items: 2,
                nav: true,
                dots: false
            },
            991: {
                items: 3,
                nav: true,
                dots: false
            },
            1199: {
                items: 4,
                nav: true,
                dots: false
            }
        }
    });

    $('.countdown-box').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('カウントダウン!');
    });
});
