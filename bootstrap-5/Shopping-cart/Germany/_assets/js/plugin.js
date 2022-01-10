$(document).ready(function () {
    //back-to-top
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

    //screen
    if (screen.width < 768) {
        $('.footer-menu .heading').click(function () {
            $(this).next('.list').slideToggle();
        });
    }
});