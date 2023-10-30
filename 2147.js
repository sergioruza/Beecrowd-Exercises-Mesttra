const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

for (let i = 0; i < cases; i += 1) {
  const word = lines[i];
  const length = word.length;

  console.log((length * 0.01).toFixed(2));
}