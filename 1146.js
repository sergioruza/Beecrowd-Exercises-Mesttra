const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(e => Number(e));

for (let i of lines) {
  if (i === 0) break;

  let string = '';

  for (let x = 1; x <= i; x += 1) {
    string += (x === i ? `${x}` : `${x} `)
  }

  console.log(string);
}