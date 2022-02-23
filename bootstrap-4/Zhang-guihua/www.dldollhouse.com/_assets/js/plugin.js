$(document).ready(function () {
    // $('.nav-main li.dropdown').mouseover(function () {
    //     $(this).children(".dropdown-menu").addClass('show');
    // }).mouseout(function () {
    //     $(this).children(".dropdown-menu").removeClass('show');
    // });

    $(document).on('touchstart', '.navbar-toggler', function (event) {
        $('.navbar-block').fadeIn(0).find('.navbar').addClass('active');
    });
    $(document).on('touchstart', '.navbar-block', function (e) {
        if ($(e.target).closest('.navbar').length === 0) {
            $('.navbar-block .navbar').removeClass('active');
            setTimeout("$('.navbar-block').fadeOut(50)", 220);
        }
    });

    $(function ($) {
        $(".accordion > dt").click(function () {
            $(this).next("dd:not(:animated)").slideToggle('fast');
            $(this).toggleClass("open");
        });
    });

    $(function ($) {
        $(".product-option .title").click(function () {
            $(this).next(".content:not(:animated)").slideToggle('fast');
            $(this).toggleClass("open");
        });
    });
});