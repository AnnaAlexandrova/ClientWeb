document.addEventListener("DOMContentLoaded", function () {
    var people = [
        {
            name: "Ivan",
            lastName: "Ivanov",
            age: 35
        },
        {
            name: "Alex",
            lastName: "Alexeev",
            age: 16
        },
        {
            name: "Anna",
            lastName: "Alexandrova",
            age: 30
        },
        {
            name: "Vadim",
            lastName: "Alexandrov",
            age: 25
        },
        {
            name: "Inna",
            lastName: "Oresh",
            age: 28
        },
        {
            name: "Oleg",
            lastName: "Semenov",
            age: 20
        },
        {
            name: "Olga",
            lastName: "Kim",
            age: 44
        },
        {
            name: "Igor",
            lastName: "Nosov",
            age: 48
        },
        {
            name: "Pavel",
            lastName: "Levin",
            age: 32
        },
        {
            name: "Irina",
            lastName: "Mostova",
            age: 27
        }
    ];

    var avgAge = _.chain(people)
        .pluck("age")
        .reduce(function (memo, age) {
            return memo + age;
        }, 0)
        .value() / _.size(people);
    console.log(avgAge);

    var peopleList = _.chain(people)
        .filter(function (p) {
            return p.age >= 20 && p.age <= 30;
        })
        .sortBy("age")
        .value();
    console.log(peopleList);

    var newList = _.chain(people)
        .map(function (p) {
            return p.fullName = p.name + " " + p.lastName;
        })
        .assign(people)
        .value();
    console.log(newList);
});
