const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map((e) => Number(e));

const X = lines.shift();

let Z;

for (let i of lines) {
  if (i >= X) Z = i
}

let soma = 0;
let contador = 0;
let somador = X;

while (soma <= Z) {
  contador += 1;
  soma += somador;
  somador += 1;
}

console.log(contador);