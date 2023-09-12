const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines[0]);

for (let i = 1; i <= casos; i++) {
  let quadrado = i * i;
  let cubo = Math.pow(i, 3);

  console.log(`${i} ${quadrado} ${cubo}`);
  console.log(`${i} ${quadrado + 1} ${cubo + 1}`);
}