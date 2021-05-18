var is_running = false;
$(window).scroll(function () {
    var winH = $(window).height();
    var iTop = $(window).scrollTop();
})

var h = $(window).height();
var w = $(window).width();
if (w > 768) {
    $(".swiper-container .swiper-wrapper .swiper-slide .pic-box").css("height", h)
}
$(window).on("resize", function (e) {
    var height = $(window).height();
    var win = $(window).width();
    if (win > 768) {
        $(".swiper-container .swiper-wrapper .swiper-slide .pic-box").css("height", height - 121)
    }

}).trigger("resize");


var banner = new Swiper('.swiper-container', {
    autoplay: {
        effect : 'fade',
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        init: function () {
            $(".swiper-container .swiper-wrapper .swiper-slide").eq(0).addClass("on").siblings().removeClass("on");
        },
        slideChangeTransitionEnd: function () {
            $(".swiper-container .swiper-wrapper .swiper-slide").eq(this.activeIndex).addClass("on").siblings().removeClass("on");
            $(".swiper-container .swiper-wrapper .swiper-slide").siblings().addClass("delay");
            $(".swiper-container .swiper-wrapper .swiper-slide").eq(this.activeIndex).removeClass("delay");
        },
    },
});