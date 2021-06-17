$(document).ready(function () {
    $('.nav-main li.dropdown').mouseover(function () {
        $(this).children(".dropdown-menu").stop(true, false).slideDown(50).addClass('show');
    }).mouseout(function () {
        $(this).children(".dropdown-menu").stop(true, false).slideUp(50).removeClass('show');
    });
});

$(document).ready(function () {
    if (screen.width > 992) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 120) {
                $(".navbar.nav-main").removeClass("justify-center");
                $(".navbar.nav-main").addClass("justify-between");
                $("header .logo").css("display", "none");
                $(".navbar-box .logo-box").fadeIn(500);
            } else {
                $(".navbar.nav-main").removeClass("justify-between");
                $(".navbar.nav-main").addClass("justify-center");
                $("header .logo").css("display", "block");
                $(".navbar-box .logo-box").stop(true, false).fadeOut(0);
            }
        });
    }
});

$(document).on('touchstart', '.navbar-toggler', function (event) {
    $('.navbar-box').fadeIn(0).find('.navbar').addClass('active');
});
$(document).on('touchstart', '.navbar-box', function (e) {
    if ($(e.target).closest('.navbar').length === 0) {
        $('.navbar-box .navbar').removeClass('active');
        setTimeout("$('.navbar-box').fadeOut(50)", 220);
    }
});