const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = +lines[0];

lines.shift();

const arrayNumeros = lines.map((e) => e.split(' ').map((num) => Number(num)));

for (let i = 0; i < casos; i += 1) {
  const mediaPonderada = ((arrayNumeros[i][0] * 2) + (arrayNumeros[i][1] * 3) + (arrayNumeros[i][2] * 5)) / 10;
  console.log(mediaPonderada.toFixed(1));
}