const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const notas = [100, 50, 20, 10, 5, 2];


for (let i = 0; i < lines.length; i += 1) {
  const [v1, v2] = lines[i].split(' ').map(Number);
  if (v1 === 0 && v2 === 0) {
    break
  }
  let troco = v2 - v1;
  let count = 0;
  let cedulasTroco = 0

  while (troco > 0 && count < notas.length) {
    if (troco >= notas[count]) {
      troco %= notas[count];
      cedulasTroco += 1
    } else {
      count += 1;
    }
  }

  if (troco === 0 && cedulasTroco === 2) {
    console.log("possible");
  } else {
    console.log("impossible");
  }
}
