const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines.shift());

for (let a = 0; a < casos; a += 1) {
  const numero = Number(lines[a]);

  let divisores = 0;
  for (let i = 1; i <= numero; i += 1) {
    if (numero % i === 0) divisores += 1;
  }

  const resultado = divisores === 2 ? `${numero} eh primo` : `${numero} nao eh primo`;

  console.log(resultado);
}


