const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

// for eachloop that always accepts the fucntion as a input/ parameter
// names.forEach(function (value) {
//     console.log(value);
// })


// map function
// let arrNames = names.map(function (value) {
//     return "Hello " + value;
// })
// console.log(names);
// console.log(arrNames);

let arr = [23, 5465, 4556, 1223, 67564, 3421, 1341, 4454, 43221]
let arr2 = arr.map(function (value) {
    if (value % 2 == 0) {
        return value;
    }
    else {
        return
    }
})

for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] === undefined) {
        arr2.splice(i, 1);

    }
}
console.log(arr);
console.log(arr2)
console.log(arr2.length);