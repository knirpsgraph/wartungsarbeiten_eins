$(document).ready(function () {
    var service = $(".services-list") && $(".service-category");
    var icon = $(".iconInfoIcon");
    service.mouseover(function () {
        icon.removeClass("toggleLeft");
        icon.addClass("toggleIcon");
    });
    service.mouseleave(function () {
        icon.removeClass("toggleIcon");
        icon.addClass("toggleLeft");
    });
});
//# sourceMappingURL=script.js.map