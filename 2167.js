const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

const numbers = lines.shift().split(' ').map(Number)

let status = 0
let lastRPM;

for (let i = 1; i < cases; i += 1) {
  const number = numbers[i]

  if (numbers[i - 1] > number ) {
    status = i + 1;
    break
  }

}

console.log(status);