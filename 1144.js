const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines[0]);

let contador = 1;
let contadorNumero = 0

while (contador <= casos) {
  if (contadorNumero === 2) {
    contador += 1;
  }
}