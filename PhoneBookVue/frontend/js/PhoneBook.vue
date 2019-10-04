<template>
    <div class="container">
        <h1 class="mb-3">Phone Book 2</h1>

        <form class="form-inline m-0 mb-4 needs-validation form-style row" :class="{ 'was-validated': isInvalid }" novalidate>
            <div class="mr-2 p-0">
                <input v-model="name" type="text" class="form-control mb-2" placeholder="Имя абонента"
                       maxlength="20" required>
                <div class="invalid-feedback mr-3">Введите имя абонента</div>
            </div>

            <div class="mr-2 p-0">
                <input v-model="phone" type="tel" class="form-control mb-2" placeholder="Телефон" maxlength="10"
                       required>
                <div class="invalid-feedback mr-3">Введите номер телефона</div>
            </div>

            <button @click="addContact" class="btn btn-primary" type="button">Добавить</button>
        </form>

        <form class="form-inline mb-4 form-style">
            <label class="mr-2">Поиск</label>
            <input class="form-control mr-2 mb-2" v-model="term" type="text">
            <button @click="search" class="btn btn-primary mr-3" type="button">Фильтр</button>
            <button @click="cancelSearching" class="btn btn-primary" type="button">Сбросить</button>
        </form>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>№</th>
                <th>Имя</th>
                <th>Телефон</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-cloak v-for="(c, index) in contacts">
                <td>{{ index + 1 }}.</td>
                <td>{{ c.name }}</td>
                <td>{{ c.phone }}</td>
                <td>
                    <button @click="deleteContact(c)" class="btn btn-danger" type="button">X</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import PhoneBookService from "./phoneBookService";

    export default {
        data () {
            return {
                contacts: [],
                name: "",
                phone: "",
                isInvalid: false,
                term: ""
            };
        },
        created() {
            this.loadData();
        },
        methods: {
            addContact() {
                if (this.name.trim() === "" || this.phone.trim() === "") {
                    this.isInvalid = true;
                    return;
                }

                const data = {
                    name: this.name,
                    phone: this.phone
                };

                this.isInvalid = false;

                PhoneBookService.addContact(data).done(response => {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    this.loadData();

                    this.name = "";
                    this.phone = "";
                });
            },
            loadData() {
                PhoneBookService.getContacts(this.term).done(contacts => {
                    this.contacts = contacts;
                });
            },
            deleteContact(c) {
                PhoneBookService.deleteContact(c.id).done(response => {
                    if (!response.success) {
                        alert(response.message);
                        return;
                    }

                    this.loadData();
                });
            },
            search() {
                this.loadData();
            },
            cancelSearching() {
                this.term = "";
                this.loadData();
            }
        }
    };
</script>