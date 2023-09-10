const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines[0]);

let contador = 0;

let condicaoDeSoma = 2;

let ultimoNumero = 0;

console.log(ultimoNumero + 1, ultimoNumero + 2, ultimoNumero + 3, 'PUM');
ultimoNumero = ultimoNumero + 3;
contador += 1;

while (contador < casos) {
    ultimoNumero += condicaoDeSoma;
  console.log(ultimoNumero, ultimoNumero + 1, ultimoNumero + 2, 'PUM');
    ultimoNumero = ultimoNumero + 2;
    contador += 1;
}