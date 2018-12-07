'use strict';

const fs = require('fs');

const reducer = (accumulator, currentValue) => accumulator + currentValue;

var initialValue = 0;
var mySet = new Set();

fs.readFile('input.txt', (err, input) => {
    if (err) throw err;
    var myArray = input.toString()
        .split(/\n|\r/m)
        .map(Number);

    let startFreq = 0;
    let element = myArray.shift() + startFreq;

    while (condition) {

    }
});