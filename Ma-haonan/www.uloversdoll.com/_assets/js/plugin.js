$(document).ready(function () {
    // $('.nav-main li.dropdown').mouseover(function () {
    //     $(this).children(".dropdown-menu").addClass('show');
    // }).mouseout(function () {
    //     $(this).children(".dropdown-menu").removeClass('show');
    // });

    $(document).ready(function () {
        if (screen.width > 992) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= 220) {
                    $(".navbar.nav-main").removeClass("justify-center");
                    $(".navbar.nav-main").addClass("justify-between");
                    $("header .row > div:nth-of-type(3)").css("display", "none");
                    $(".navbar-box .logo-box").fadeIn(500);
                } else {
                    $(".navbar.nav-main").removeClass("justify-between");
                    $(".navbar.nav-main").addClass("justify-center");
                    $("header .row > div:nth-of-type(3)").css("display", "block");
                    $(".navbar-box .logo-box").fadeOut(50);
                }
            });
        }

        if (screen.width <= 992) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= 220) {
                    $("header .row > div:nth-of-type(4)").css("display", "none");
                } else {
                    $("header .row > div:nth-of-type(4)").css("display", "block");
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

    $(function ($) {
        $(".accordion > dt").click(function () {
            $(this).next("dd:not(:animated)").slideToggle('fast');
            $(this).toggleClass("open");
        });
    });

    function addFavorite() {
        var url = window.location;
        var title = document.title;
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("360se") > -1) {
            alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
        } else if (ua.indexOf("msie 8") > -1) {
            window.external.AddToFavoritesBar(url, title); //IE8
        } else if (document.all) {
            try {
                window.external.addFavorite(url, title);
            } catch (e) {
                alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
            }
        } else if (window.sidebar) {
            window.sidebar.addPanel(title, url, "");
        } else {
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
    }
});