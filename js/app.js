var main = function () {
    "use strict";
    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element);
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                console.log("Щелчок на первой вкладке!");
            } else if ($element.parent().is(":nth-child(2)")) {
                console.log("Щелчок на второй вкладке!");
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("Щелчок на третьей вкладке!");
            }
            return false;
        });
    });
};
main();