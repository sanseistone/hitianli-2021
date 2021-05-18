$(document).ready(function () {
    $(document).on('touchstart', '.navbar-toggler', function (event) {
        $('.navbar-box').fadeIn(0).find('.navbar').addClass('active');
    });
    $(document).on('touchstart', '.navbar-box', function (e) {
        if ($(e.target).closest('.navbar').length === 0) {
            $('.navbar-box .navbar').removeClass('active');
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