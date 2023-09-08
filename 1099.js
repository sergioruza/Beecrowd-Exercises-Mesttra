const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = +lines[0];
lines.shift();

for (let i = 0; i < casos; i += 1) {
  let [X, Y] = lines[i].split(' ').map((e) => Number(e));
  const temporario = X;

  if (X > Y) {
    X = Y;
    Y = temporario;
  }

  let somaImpar = 0;

  for (let a = X + 1; a < Y; a += 1) {
    if (a % 2 !== 0) {
      somaImpar += a;
    }
  }

  console.log(somaImpar);
}