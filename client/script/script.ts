$(document).ready(function() {
    let service: JQuery = $(".services-list") && $(".service-category");
    let icon: JQuery =  $(".iconInfoIcon");
    service.mouseover(function () {
        icon.removeClass("toggleLeft");
        icon.addClass("toggleIcon");
    })
    service.mouseleave(function () {
        icon.removeClass("toggleIcon");
        icon.addClass("toggleLeft");
    })
});