const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B] = lines[0].split(' ').map((e) => Number(e));

let result = 0;
if (B === 0 && A === 0 || A === B) {
  result = 24;
} else if (B < A) {
  result = 24 - (A - B);
} else {
  result = B - A;
}

console.log(`O JOGO DUROU ${result} HORA(S)`);