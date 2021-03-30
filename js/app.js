var main = function () {
    "use strict";
    var makeTabActive = function (tabNumber) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(".tabs span").removeClass("active");
        $(tabSelector).addClass("active");
    };
    $(".tabs a:nth-child(1)").on("click", function () {
        makeTabActive(1);
        return false;
    });
    $(".tabs a:nth-child(2)").on("click", function () {
        makeTabActive(2);
        return false;
    });
    $(".tabs a:nth-child(3)").on("click", function () {
        makeTabActive(3);
        return false;
    });
};
main();