const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let e of lines) {
  let [X, Y] = e.split(' ').map((num) => Number(num));

  if (X <= 0 || Y <= 0) {
    break
  }

  const temporario = X;

  if (X < Y) {
    X = Y;
    Y = temporario;
  }


  let stringFinal = ''
  let soma = 0;
  for (let i = Y; i <= X; i += 1) {
    stringFinal += `${i} `
    soma += i;
  }
  stringFinal += `Sum=${soma}`;

  console.log(stringFinal);
}