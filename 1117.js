const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const notasValidas = [];

for (let i = 0; i < lines.length; i++) {
  const nota = parseFloat(lines[i]);

  if (notasValidas.length === 2) {
    break;
  }

  if (nota >= 0 && nota <= 10) {
    notasValidas.push(nota);
  } else {
    console.log('nota invalida');
  }
}

const media = (notasValidas[0] + notasValidas[1]) / 2;
console.log(`media = ${media.toFixed(2)}`);