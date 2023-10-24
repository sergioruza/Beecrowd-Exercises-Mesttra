const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n')[0].split(' ').map(Number)

const sum = lines.reduce((acc, cur) => acc + cur)

let resultado;

if (sum > 12 && sum < 24) {
  resultado = (sum);
} else if (sum > 24) {
  resultado = (sum - 24);
} else if (lines[0] === 0) {
  if (24 + sum > 24) {
    resultado = ((24 + sum) - 24);
  } else {
    resultado = (24 + sum);
  }
}

console.log(resultado === 24 ? 0 : resultado);