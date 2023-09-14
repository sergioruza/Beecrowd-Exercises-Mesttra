const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(e => Number(e));

for (let i = 0; i < 100; i += 1) {
  const numero = lines[i];

  if (numero <= 10) {
    console.log(`A[${i}] = ${numero.toFixed(1)}`);
  }
}