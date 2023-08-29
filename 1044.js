const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B] = lines[0].split(' ').map((e) => Number(e));

if (B % A === 0 || A % B === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}

