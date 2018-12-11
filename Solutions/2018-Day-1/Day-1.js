const fs = require('fs');

const datas = fs.readFileSync('input.txt', 'utf-8');
let currFrequency = new Set();

const changes = datas.split(/\n|\r/m)
    .map(Number);

//--test inputs
//const changes = [+1, -1];
//const changes = [+3, +3, +4, -2, -4];
//const changes = [-6, +3, +8, +5, -6];
//const changes = [+7, +7, -2, -7, -4]

let frequency = 0;
let i = 0;

while (true) {
    frequency += changes[i];
    if (currFrequency.has(frequency)) {
        console.log(frequency);
        break;
    }
    currFrequency.add(frequency);
    i = i === changes.length - 1 ? 0 : i + 1;
}