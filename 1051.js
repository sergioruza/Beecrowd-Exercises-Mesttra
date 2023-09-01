const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A] = lines[0].split(' ').map((e) => Number(e));

let renda = A;

let result = 0

if (A <= 2000) {
  result = 'Isento';
} else if (A <= 3000) {
  result = (renda - 2000) * 0.08;
} else if (A <= 4000) {
  result = (1000 * 0.08) + (renda - 3000) * 0.18;
} else {
  result = (1000 * 0.08) + (1500 * 0.18) + ((renda - 4500) * 0.28);
}

console.log(result === 'Isento' ? 'Isento' : `R$ ${result.toFixed(2)}`);