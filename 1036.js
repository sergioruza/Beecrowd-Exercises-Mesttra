const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines[0].split(' ');
A = +A;
B = +B;
C = +C;

const delta = (Math.pow(B, 2)) - 4 * A * C;

if (delta <= 0 || A === 0) {
  console.log('Impossivel calcular');
} else {
  const r1 = ((-B + Math.sqrt(delta)) / (2 * A)).toFixed(5);
  const r2 = ((-B - Math.sqrt(delta)) / (2 * A)).toFixed(5);
  console.log(`R1 = ${r1}
R2 = ${r2}`);
}