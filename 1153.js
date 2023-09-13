const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const N = Number(lines[0]);

let fatorial = N;

for (let i = 1; i < N; i += 1) {
  fatorial *= (N - i);
}

console.log(fatorial);