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

$(document).ready(function () {
    $('.countdown-box-01').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('カウントダウン!');
    });

    $('.countdown-box-02').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('カウントダウン!');
    });
});

$(".brand-list").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 5,
});

$(document).ready(function () {
    $('.readmore-box').readmore({
        speed: 75,
        collapsedHeight: 170,
        moreLink: '<div class="mt-3"><span class="btn-readmore">More</span></div>',
        lessLink: '<div class="mt-3"><span class="btn-readmore">Close</span></div>'
    });
});