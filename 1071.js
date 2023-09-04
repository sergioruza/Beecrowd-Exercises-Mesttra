const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B] = lines.map((e) => Number(e));

let num1 = Math.min(A, B) + 1;
let num2 = Math.max(A, B) - 1;

let result = 0;

for (let i = num1; i <= num2; i++) {
  if (i % 2 !== 0) {
    result += i;
  }
}

console.log(result);