const express = require('express');
const router = express.Router();

let contacts = [];
let id = 1;

router.get("/getContacts", function (req, res) {
    const term = (req.query.term || "").toUpperCase();

    const result = term === ""
        ? contacts
        : contacts.filter(function (c) {
            return c.name.toUpperCase().indexOf(term) >= 0
                || c.phone.toUpperCase().indexOf(term) >= 0
        });
    res.send(result);
});

router.post("/addContact", function (req, res) {
    const contact = req.body;
    const name = contact.name;
    const phone = contact.phone;

    const regExpPhoneSymbols = /^[\d\s()+-]*$/;

    let success = true;
    let message = "";

    if (contact === "" || contact === null) {
        success = false;
        message = "Data is not correct";
    } else if (name === "" || name === null) {
        success = false;
        message = "Name is not correct";
    } else if (!regExpPhoneSymbols.test(phone)) {
        success = false;
        message = "Phone is not correct";
    }

    function isExist(contact) {
        return phone === contact.phone;
    }

    if (contacts.some(isExist)) {
        success = false;
        message = "Contact with this phone number is already exists";
    }

    if (!success) {
        res.send({
            success: false,
            message: message
        });
    } else {
        contacts.push(contact);
        contact.id = id;
        id++;

        res.send({
            success: true,
            message: null
        });
    }
})
;

router.post("/deleteContact", function (req, res) {
    const id = req.body.id;

    contacts = contacts.filter(function (c) {
        return c.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
});

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;
