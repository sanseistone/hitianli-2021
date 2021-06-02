$(document).ready(function () {
    // $('.nav-main li.dropdown').mouseover(function () {
    //     $(this).children(".dropdown-menu").addClass('show');
    // }).mouseout(function () {
    //     $(this).children(".dropdown-menu").removeClass('show');
    // });

    $(document).on('touchstart', '.navbar-toggler', function (event) {
        $('.navbar-box').fadeIn(0).find('.navbar-inner').addClass('active');
    });
    $(document).on('touchstart', '.navbar-box', function (e) {
        if ($(e.target).closest('.navbar-inner').length === 0) {
            $('.navbar-box .navbar-inner').removeClass('active');
            setTimeout("$('.navbar-box').fadeOut(50)", 220);
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