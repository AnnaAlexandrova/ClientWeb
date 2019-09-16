function post(url, data) {
    return $.post({
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json"
    });
}

function get(url, data) {
    return $.get(url, data);
}

new Vue({
    el: "#app",
    data: function () {
        return {
            contacts: [],
            name: "",
            phone: "",
            term: ""
        };
    },
    created: function () {
        this.loadData();
    },
    methods: {
        addContact: function () {
            var form = $(".needs-validation")[0];

            if (this.name.trim() === "" || this.phone.trim() === "") {
                $(form).addClass("was-validated");
                return;
            }

            var data = {
                name: this.name,
                phone: this.phone
            };

            $(form).removeClass("was-validated");

            var self = this;

            post("/addContact", data).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.loadData();

                self.name = "";
                self.phone = "";
            });
        },
        loadData: function () {
            var self = this;

            var data = {
                term: this.term
            };

            get("/getContacts", data).done(function (contacts) {
                self.contacts = contacts;
            })
        },
        deleteContact: function (c) {
            var self = this;

            post("/deleteContact", {id: c.id}).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.loadData();
            })
        },
        search: function () {
            this.loadData();
        },
        cancelSearching: function () {
            this.term = "";
            this.loadData();
        }
    }
});

