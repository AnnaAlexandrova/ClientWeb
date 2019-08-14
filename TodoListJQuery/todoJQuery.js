$(document).ready(function () {
    var todoList = $("#todo-list");
    var newTodoText = $("#new-todo-text");
    var addTodoButton = $("#add-todo-button");

    var validationMessage = $(".validation-message");

    addTodoButton.click(function () {
        if (newTodoText.val() === "") {
            validationMessage.show();
            return;
        }

        validationMessage.hide();

        var li = $("<li>")
            .html("<span></span><button type='button'>Изменить</button><button type='button'>X</button>")
            .appendTo(todoList);

        li.children().eq(0).text(newTodoText.val());

        li.children().eq(1).click(function () {
            var prevText = li.children().eq(0).text();
            li.children().hide();

            var temp = $("<div>")
                .html("<input type='text'><button type='button'>Сохранить</button><button type='button'>Отменить</button>")
                .appendTo(li);

            temp.children().eq(0).val(prevText);

            temp.children().eq(1).click(function () {
                var newText = temp.children().eq(0).val();
                temp.remove();
                li.children().show();
                li.children().eq(0).text(newText);
            });

            temp.children().eq(2).click(function () {
                temp.remove();
                li.children().show();
            });
        });

        li.children().eq(2).click(function () {
            li.remove();
        });

        newTodoText.val("");
    });
});


