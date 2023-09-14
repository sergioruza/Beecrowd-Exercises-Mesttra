const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numero = Number(lines[0]);

for (let i = numero; i >= 1; i -= 1) {
  const divisao = numero / i;
  if (Number.isInteger(divisao) && divisao >= 1) {
    console.log(divisao);
  }
}