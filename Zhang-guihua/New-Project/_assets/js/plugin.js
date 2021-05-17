$(document).ready(function () {
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