const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numero = Number(lines[0]);

for (let i = 1; i <= numero; i += 1) {
  if (i % 2 === 0) console.log( i + '^' + '2' + ` = ${Math.pow(i, 2)}`);
}