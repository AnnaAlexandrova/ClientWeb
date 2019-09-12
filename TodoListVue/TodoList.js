Vue.component("todo-list-item", {
    props: ["item"],
    data: function () {
        return {
            needsEdit: false,
            previousTodoText: this.item.text
        };
    },
    template: "#todo-list-item-template",
    methods: {
        deleteItem: function () {
            this.$emit("delete-item", this.item);
        },
        editItem: function () {
            this.needsEdit = true;
        },
        save: function () {
            this.$emit("change-item", this.item, this.previousTodoText);
            this.needsEdit = false;
            this.previousTodoText = this.item.text;
        },
        cancel: function () {
            this.$emit("cancel-changing", this.item, this.previousTodoText);
            this.needsEdit = false;
        }
    }
});

new Vue({
        el: "#app",
        data: function () {
            return {
                items: [],
                newTodoText: "",
                isInvalid: false
            }
        },
        methods: {
            addTodo: function () {
                if (this.newTodoText.trim() === "") {
                    this.isInvalid = true;
                    return;
                }

                this.isInvalid = false;

                this.items.push({
                    text: this.newTodoText
                });

                this.newTodoText = "";
            },

            changeItem: function (item, previousTodoText) {
                if (item.text.trim() === "") {
                    item.text = previousTodoText;
                } else {
                    this.previousTodoText = item.text;
                }
            },

            cancelChanging: function (item, previousTodoText) {
                item.text = previousTodoText;
            },

            deleteTodo: function (item) {
                this.items = this.items.filter(function (x) {
                    return x !== item;
                })
            }
        }
    }
);