$(document).ready(function () {
    $('.nav-main li.dropdown').mouseover(function () {
        $(this).children(".dropdown-menu").addClass('show');
    }).mouseout(function () {
        $(this).children(".dropdown-menu").removeClass('show');
    });

    $('.countdown-box').downCount({
        date: '12/12/2030 00:00:00',
        offset: +9
    }, function () {
        alert('カウントダウン!');
    });
});
