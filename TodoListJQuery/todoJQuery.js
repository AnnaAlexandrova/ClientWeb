$(document).ready(function () {
    var todoList = $("#todo-list");
    var newTodoText = $("#new-todo-text");
    var addTodoButton = $("#add-todo-button");

    addTodoButton.click(function () {
        if (newTodoText.val() === "") {
            addTodoButton.next().css({display: "block"});
            return;
        }

        addTodoButton.next().css({display: "none"});

        var li = $("<li>")
            .html("<span></span><button type='button'>Изменить</button><button type='button'>X</button>")
            .appendTo(todoList);

        li.find(":first").text(newTodoText.val());

        li.find("button:first").click(function () {
            li.children().hide();

            var temp = $("<div>")
                .html("<input type='text'><button type='button'>Сохранить</button><button type='button'>Отменить</button>")
                .appendTo(li);

            temp.find("button:first").click(function () {
                var newText = temp.find(":first").val();
                temp.remove();
                li.children().show();
                li.find(":first").text(newText);
            });

            temp.find("button:last").click(function () {
                temp.remove();
                li.children().show();
            });
        });

        li.find("button:last").click(function () {
            li.remove();
        });

        newTodoText.val("");
    });
});


