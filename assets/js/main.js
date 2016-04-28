$(document).ready(function(){
    var menu = $("#menu");
    if (menu.length) {
        var offset = menu.offset().top;
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > offset) {
                menu.css("position", "fixed");
            }
            else {
                menu.css("position", "absolute");
            }
        });
    }
});