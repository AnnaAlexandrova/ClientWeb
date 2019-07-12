const list = [1, 2, 3, 4, 5, 6, 7, 8];

list.sort(function (n1, n2) {
    return n1 - n2
}).reverse();
console.log(list);

const beginningList = list.slice(0, 5);
console.log(beginningList);

const endList = list.slice(list.length - 5);
console.log(endList);

function filter(list, f) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        let el = list[i];
        if (f(el)) {
            result.push(el)
        }
    }
    return result;
}

const result = filter(list, function (e) {
    return e % 2 === 0;
});

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(result.reduce(reducer));

const newList = [];

for (let i = 0; i < 100; i++) {
    newList[i] = i + 1;
}
console.log(newList);

const evenList = filter(newList, function (e) {
    return e % 2 === 0;
});

evenList.forEach(function (e) {
    console.log(Math.pow(e, 2));
});

