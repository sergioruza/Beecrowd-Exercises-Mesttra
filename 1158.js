const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines.shift());

for (let i = 0; i < casos; i += 1) {
  let [X, Y] = lines[i].split(' ').map((e) => Number(e));

  const impares = [];
  while (impares.length !== Y) {
    if (X % 2 !== 0) {
      impares.push(X);
    }
    X += 1;
  }
  console.log(impares.reduce((acc, cur) => acc + cur));
}