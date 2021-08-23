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