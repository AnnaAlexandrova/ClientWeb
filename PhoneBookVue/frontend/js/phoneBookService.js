import Ajax from "./ajax";

export default {
    addContact: function (contact) {
        return Ajax.post("/addContact", contact);
    },
    deleteContact: function (id) {
        return Ajax.post("/deleteContact", {id});
    },
    getContacts: function (term) {
        const data = {
           term
        };

        return Ajax.get("/getContacts", data);
    }
};
