const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numero = (Number(lines[0]));
let contador = 0;

for (let i = 0; i < 1000; i += 1) {
  console.log(`N[${i}] = ${contador}`);

  contador += 1;

  if (contador === numero) {
    contador = 0;
  }
}