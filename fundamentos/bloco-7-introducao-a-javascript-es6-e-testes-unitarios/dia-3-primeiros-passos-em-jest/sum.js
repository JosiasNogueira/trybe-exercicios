const { array } = require("yargs");

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

function myRemove(arr, item) {

    let clone = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            clone.push(arr[index]);
        }
    }
    return clone;
}




module.exports = { sum, myRemove };