$(document).ready(function () {
    $('.nav-main li.dropdown').mouseover(function () {
        $(this).children(".dropdown-menu").addClass('show');
    }).mouseout(function () {
        $(this).children(".dropdown-menu").removeClass('show');
    });

    $(function() {
        $("img.lazy").lazyload({
            effect : "fadeIn"
        });
    });

    $('.owl-six').owlCarousel({
        loop: true,
        margin: 20,
        navText: ['<img src="assets/img/svg/caret-left-fill.svg" alt="">', '<img src="assets/img/svg/caret-right-fill.svg" alt="">'],
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
        navText: ['<img src="assets/img/svg/caret-left-fill.svg" alt="">', '<img src="assets/img/svg/caret-right-fill.svg" alt="">'],
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

    $('.readmore-box').readmore({
        speed: 75,
        collapsedHeight: 0,
        moreLink: '<div class="d-grid"><button class="btn btn-danger" type="button">More <img src="assets/img/svg/chevron-down-white.svg" alt=""></button></div>',
        lessLink: '<div class="d-grid"><button class="btn btn-danger" type="button">More <img src="assets/img/svg/chevron-up-white.svg" alt=""></button></div>'
    });

    $('.countdown-box').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('カウントダウン!');
    });
});
