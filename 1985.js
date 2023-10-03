const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const obj = {
  1001: 1.50,
  1002: 2.50,
  1003: 3.50,
  1004: 4.50,
  1005: 5.50
}

const cases = Number(lines.shift());

let sum = 0;
for (let i = 0; i < cases; i += 1) {
  const [code, amount] = lines[i].split(' ');
  sum += (obj[code] * Number(amount));
}

console.log(sum.toFixed(2));