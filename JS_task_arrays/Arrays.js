var list = [1, 2, 3, 4, 5, 6, 7, 8];

list.sort(function (n1, n2) {
    return n2 - n1;
});
console.log(list);

var beginningList = list.slice(0, 5);
console.log(beginningList);

var endList = list.slice(list.length - 5);
console.log(endList);

var evenArray = list.filter(function (e) {
    return e % 2 === 0;
});

console.log(evenArray.reduce(function (sum, currentValue) {
    return sum + currentValue;
}, 0));

var newList = [];

for (var i = 1; i <= 100; i++) {
    newList.push(i)
}
console.log(newList);

var evenList = newList.filter(function (e) {
    return e % 2 === 0;
});

var newEvenList = evenList.map(function (e) {
    return Math.pow(e, 2);
});
console.log(newEvenList);
