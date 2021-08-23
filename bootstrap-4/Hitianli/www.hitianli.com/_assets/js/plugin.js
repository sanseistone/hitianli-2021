$(".write-reviews-box .click-ask").click(function() {
    if($(".ask-question").hasClass("hide")) {
        $(".ask-question").removeClass("hide");
    } else {
        $(".ask-question").addClass("hide");
    }
});

$(".write-reviews-box .click-write").click(function() {
    if($(".write-review").hasClass("hide")) {
        $(".write-review").removeClass("hide");
    } else {
        $(".write-review").addClass("hide");
    }
});

$(".form-user-box .click-link").click(function() {
    if($(this).parent().next().hasClass("hide")) {
        $(this).parent().next().removeClass("hide");
    } else {
        $(this).parent().next().addClass("hide");
    }
});