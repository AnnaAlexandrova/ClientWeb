function ready() {
    document.getElementById("transfer").addEventListener("click", function () {
        var degree = document.getElementById("celsius").value;

        if (isNaN(degree)) {
            alert("Введите число в шкалу Цельсия");
        } else {
            document.getElementById("kelvin").value = +degree + 273.15;
            document.getElementById("fahrenheit").value = +degree * 1.8 + 32;
        }
    });
}

document.addEventListener("DOMContentLoaded", ready);

