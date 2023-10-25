const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

const numbers = lines.shift().split(' ').map(Number);

let obj = {
  2: 0,
  3: 0,
  4: 0,
  5: 0
}

for (let i = 0; i < cases; i += 1) {
  const number = numbers[i]
  const multipleNumbers = Object.keys(obj);

  for (let x = 0; x < multipleNumbers.length; x += 1) {
    const multipleNumber = multipleNumbers[x];

    if (number % multipleNumber === 0) {
      obj[multipleNumber] += 1
    }
  }
}

console.log(`${obj[2]} Multiplo(s) de 2\n${obj[3]} Multiplo(s) de 3\n${obj[4]} Multiplo(s) de 4\n${obj[5]} Multiplo(s) de 5`);
