const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(e => Number(e));

const casos = lines.shift();

for (let i = 0; i < casos; i += 1) {
  const valor = lines[i];
  console.log(`Fib(${valor}) = ${calcular(valor)}`);
}

function calcular(valor) {
  if (valor === 0) return 0;
  if (valor === 1) return 1;

  let a = 0;
  let b = 1;
  let resultado = 0;

  for (let i = 2; i <= valor; i += 1) {
    resultado = a + b;
    a = b;
    b = resultado;
  }

  return resultado;
}