const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = parseFloat(lines[0]);

for (let i = 0; i < 100; i += 1) {
  console.log(`N[${i}] = ${numero.toFixed(4)}`);

  numero = numero / 2;
}