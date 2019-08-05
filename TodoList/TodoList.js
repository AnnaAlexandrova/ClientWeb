document.addEventListener("DOMContentLoaded", function () {
    var todoList = document.getElementById("todo-list");
    var newTodoText = document.getElementById("new-todo-text");

    var validationMessage = document.querySelector(".validation-message");

    var addTodoButton = document.getElementById("add-todo-button");
    addTodoButton.addEventListener("click", function () {
        var newText = newTodoText.value;
        if (newText === "") {
            validationMessage.style.display = "block";
            return;
        }

        validationMessage.style.display = "none";

        var li = document.createElement("li");
        li.innerHTML = "<span></span><button type='button'>X</button>";

        li.children[0].textContent = newText;
        li.children[1].addEventListener("click", function () {
            todoList.removeChild(li);
        });

        todoList.appendChild(li);

        newTodoText.value = "";
    });
});