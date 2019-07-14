const list = [1, 2, 3, 4, 5, 6, 7, 8];

list.sort(function (n1, n2) {
    return n2 - n1;
});
console.log(list);

const beginningList = list.slice(0, 5);
console.log(beginningList);

const endList = list.slice(list.length - 5);
console.log(endList);

const evenArray = list.filter(function (e) {
    return e % 2 === 0;
});

console.log(evenArray.reduce(function (sum, currentValue) {
    return sum + currentValue;
}, 0));

const newList = [];

for (var j = 0; j < 100; j++) {
    newList.push(j + 1)
}
console.log(newList);

const evenList = newList.filter(function (e) {
    return e % 2 === 0;
}, 0);

const newEvenList = evenList.map(function (e) {
    return Math.pow(e, 2);
});
console.log(newEvenList);
