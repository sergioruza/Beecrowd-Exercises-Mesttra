const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [cases, target] = lines[0].split(' ').map(Number);

let result = 0;

for (let i = 1; i < cases; i++) {
  const [code, game] = lines[i].split(' ').map(Number);

  if (game === 0 && code === target) {
    result += 1;
  }
}

console.log(result);