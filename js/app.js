var main = function () {
    "use strict";

    var toDos = [
        "Закончить писать эту книгу",
        "Вывести Грейси на прогулку в парк",
        "Ответить на электронные письма",
        "Подготовиться к лекции в понедельник",
        "Обновить несколько новых задач",
        "Купить продукты"
    ];

    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (var i = toDos.length; i > -1; i--) {
                    $content.append($("<li>").text(toDos[i]));
                };
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                $content = $("<div>");
                $content.addClass("tabAddContent");
                $content.append($("<input>").text(""));
                $content.append($("<button>").text("+"));
                $("main .content").append($content);

                $('.tabAddContent').each(function () {
                    $('.tabAddContent button').on("click", function () {
                        if($('.tabAddContent input').val()!=""){
                            toDos.push($('.tabAddContent input').val());
                            // $('.tabAddContent input').empty();
                        }
                        return false;
                    });
                });
            }
            return false;
        });
    });
    $(".tabs a:first-child span").trigger("click");
};
main();