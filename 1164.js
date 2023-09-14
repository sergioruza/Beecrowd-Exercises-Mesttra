const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines.shift());

for (let a = 0; a < casos; a += 1) {
  const numero = Number(lines[a]);

  const divisores = [];
  for (let i = numero; i > 1; i -= 1) {
    const divisao = numero / i;
    if (Number.isInteger(divisao) && divisao >= 1) {
      divisores.push(divisao);
    }
  }
  
  const somaDivisores = divisores.reduce((acc, cur) => acc + cur, 0);

  if (somaDivisores === numero) {
    console.log(`${numero} eh perfeito`);
  } else {
    console.log(`${numero} nao eh perfeito`);
  }
}

