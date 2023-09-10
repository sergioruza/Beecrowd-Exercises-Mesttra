const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines[0]);

lines.shift();

for (let e = 0; e < casos; e += 1) {
  const [X, Y] = lines[e].split(' ').map((num) => Number(num));

  Y === 0 ? console.log('divisao impossivel') : console.log((X / Y).toFixed(1));
}