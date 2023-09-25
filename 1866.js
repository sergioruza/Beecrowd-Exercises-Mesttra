const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

for (let j = 0; j < cases; j += 1) {
  let sum = 0;
  let operation = 'Sub';

  for (let i = 0; i < lines[j]; i += 1) {
    if (operation === 'Sub') {
      sum += 1;
      operation = 'Sum'
    } else {
      sum -= 1;
      operation = 'Sub';
    }
  }

  console.log(sum);
}

