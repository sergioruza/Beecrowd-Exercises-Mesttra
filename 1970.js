const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = Number(lines.shift());

const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

let result = '';
decimalValues.forEach((e, i) => {
  while (number >= e) {
    result += romanSymbols[i];
    number -= decimalValues[i];
  }
})

console.log(result);

// auxílio chatGPT


