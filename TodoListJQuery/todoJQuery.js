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

        var todoText = li.children().eq(0);
        var changeButton = li.children().eq(1);
        var deleteButton = li.children().eq(2);

        todoText.text(newTodoText.val());

        changeButton.click(function () {
            var prevText = todoText.text();
            li.children().hide();

            var temp = $("<div>")
                .html("<input type='text'><button type='button'>Сохранить</button><button type='button'>Отменить</button>")
                .appendTo(li);

            var changedTodoText = temp.children().eq(0);
            var saveButton = temp.children().eq(1);
            var cancelButton = temp.children().eq(2);

            changedTodoText.val(prevText);

            saveButton.click(function () {
                var newText = changedTodoText.val();
                temp.remove();
                li.children().show();
                todoText.text(newText);
            });

            cancelButton.click(function () {
                temp.remove();
                li.children().show();
            });
        });

        deleteButton.click(function () {
            li.remove();
        });

        newTodoText.val("");
    });
});


