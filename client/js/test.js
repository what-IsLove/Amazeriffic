
var main = function (toDoObjects) {
    "use strict";
    var organizeByTags = function (toDoObjects) {
        var tags = [];
        toDoObjects.forEach(function (toDo) {
            toDo.tags.forEach(function (tag) {
                if (tags.indexOf(tag) === -1) {
                    tags.push(tag);
                }
            });
        });
    
        var tagObjects = tags.map(function (tag) {
            var toDosWithTag = toDoObjects.filter(function (toDo) {
                if (toDo.tags.indexOf(tag) !== -1) {
                    return toDo.description;
                }
            }).map(function (toDo) { return toDo.description });
            return { "name": tag, "toDos": toDosWithTag };
        });
        console.log(tagObjects)
        return tagObjects;
    };
    organizeByTags(toDoObjects);
};
$(document).ready(function () {
    console.log("Start");
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});

