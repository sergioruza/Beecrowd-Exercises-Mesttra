const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((e) => {
  const [A, B] = e.split(' ');
  const quociente = Math.trunc(+A / +B); // Usando Math.trunc para obter o quociente inteiro
  const resto = +A % +B;
  console.log(`${quociente} ${resto}`);
});