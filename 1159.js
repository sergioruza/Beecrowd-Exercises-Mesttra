const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map((e) => Number(e));

for (let i of lines) {
  if (i === 0) break;

  let X = i;
  const pares = [];

  while (pares.length !== 5) {
    if (X % 2 === 0) {
      pares.push(X);
    }
    X += 1;
  }
  console.log(pares.reduce((acc, cur) => acc + cur));
}