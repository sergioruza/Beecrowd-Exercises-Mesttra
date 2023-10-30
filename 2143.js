const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift())

for (let i = 0; i < lines.length; i += 1) {
  const num = Number(lines[i]);

  if (num === 0) break;

  if (num % 2 !== 0) {
    const result = ((num - 1) * 2) + 1
    console.log(result);
  }
}