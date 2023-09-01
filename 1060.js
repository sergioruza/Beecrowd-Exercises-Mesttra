const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.map((e) => Number(e));

let countPositive = 0;

numbers.forEach((num) => {
  if (num > 0) countPositive += 1;
});

console.log(`${countPositive} valores positivos`);