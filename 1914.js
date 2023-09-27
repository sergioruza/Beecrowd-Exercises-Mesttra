const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

for (let i = 0; i < cases; i += 1) {
  const [P1, C1, P2, _C2] = lines[i * 2].split(' ');
  const [N1, N2] = lines[i * 2 + 1].split(' ').map(Number);

  const sum = N1 + N2;
  const isEven = sum % 2 === 0;

  if ((C1 === 'PAR' && isEven) || (C1 === 'IMPAR' && !isEven)) {
    console.log(P1);
  } else {
    console.log(P2);
  }
}