import Ajax from "./ajax";

export default {
    addContact (contact) {
        return Ajax.post("/addContact", contact);
    },
    deleteContact (id) {
        return Ajax.post("/deleteContact", {id});
    },
    getContacts (term) {
        const data = {
           term
        };

        return Ajax.get("/getContacts", data);
    }
};
