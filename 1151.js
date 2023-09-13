const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines[0]);

const numerosFibonacci = [];

for (let i = 0; i < casos; i += 1) {
  if (i === 0) {
    numerosFibonacci.push(0);
  } else if (i === 1) {
    numerosFibonacci.push(1);
  } else {
    const resultado = numerosFibonacci[i - 1] + numerosFibonacci[i - 2];
    numerosFibonacci.push(resultado);
  }
}

console.log(numerosFibonacci.join(' '));