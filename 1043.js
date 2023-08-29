const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [L1, L2, L3] = lines[0].split(' ').map((e) => Number(e));

if ((L1 + L2 > L3) && (L1 + L3 > L2) && (L2 + L3 > L1)) {
  const perimetro = L1 + L2 + L3;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  const areaTrapezio = ((L1 + L2) * L3 / 2).toFixed(1);
  console.log(`Area = ${areaTrapezio}`);
}