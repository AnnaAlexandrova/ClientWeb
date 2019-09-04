$(document).ready(function () {
    var contactsCount = 0;
    var phoneBook = $("#phone-book");
    var form = $(".needs-validation")[0];

    $("#form-button").css({marginTop: "10px"}).click(function (event) {
        $(this).closest('form').find("input").each(function () {
            $(this).val($.trim($(this).val()));
        });

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            $(form).addClass("was-validated");
        } else {
            var surname = $("#surname").val();
            var name = $("#name").val();
            var phoneNumber = $("#phone-number").mask("+7(999) 999-99-99").val();

            contactsCount++;

            var newContact = $("<tr></tr>")
                .append($("<td></td>").text(contactsCount))
                .append($("<td></td>").text(surname))
                .append($("<td></td>").text(name))
                .append($("<td></td>").text(phoneNumber))

                .append($("<td></td>").append($("<button>X</button>")
                    .addClass("btn btn-primary")
                    .click(function () {
                        newContact.remove();

                        $("tr:not(tr:first)").each(function (i) {
                            $(this).children().eq(0).text(i + 1);
                        });
                        contactsCount--;
                    })))
                .appendTo(phoneBook);

            $(this).closest('form').find("input").val("");
            $(form).removeClass("was-validated");
        }
    });
});