$(document).ready(function () {
    $('.nav-main li.dropdown').mouseover(function () {
        $(this).children(".dropdown-menu").addClass('show');
    }).mouseout(function () {
        $(this).children(".dropdown-menu").removeClass('show');
    });

    $('.aside ul li').has('ul').append('<span class="touch-button"><i>open</i></span>');
    $('.touch-button').click(function () {
        $(this).prev().slideToggle(200);
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.btn-plus').click(function () {
        $('.qty-input').val(Number($('.qty-input').val()) + 1);
    });
    $('.btn-minus').click(function () {
        var value = Number($('.qty-input').val()) - 1;
        if (value > 0) {
            $('.qty-input').val(value);
        }
    });

    $('.readmore-box').readmore({
        speed: 75,
        collapsedHeight: 170,
        moreLink: '<p class="mt-3"><span class="inline-block px-3 py-2 bd bd-color3 pointer">More <i class="fal fa-angle-down"></i></span></p>',
        lessLink: '<p class="mt-3"><span class="inline-block px-3 py-2 bd bd-color3 pointer">Close <i class="fal fa-angle-up"></i></span></p>'
    });
});
