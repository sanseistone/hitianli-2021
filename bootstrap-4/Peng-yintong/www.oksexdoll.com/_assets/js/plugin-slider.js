$(document).ready(function () {
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // fade: true,
        dots: true,
        asNavFor: '.slider-thumbs',
        customPaging: function (slider, i) {
            return '<button class="thumbnail">' + $(slider.$slides[i]).find('img').prop('outerHTML') + '';
        }
    });
    $('.slider-thumbs').slick({
        asNavFor: '.slider-main',
        // dots: true,
        vertical: true,
        verticalSwiping: true,
        // centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        focusOnSelect: true,
    });
});
