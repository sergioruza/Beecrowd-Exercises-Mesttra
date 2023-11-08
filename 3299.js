const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = lines[0];

let result = `${N} NO es de Mala Suerte`;

for (let i = 0; i < N.length - 1; i++) {
  if (N[i] === '1' && N[i + 1] === '3') {
    result = `${N} es de Mala Suerte`;
    break;
  }
}

console.log(result);