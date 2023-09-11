const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines[0]);

for (let i = 1; i <= casos; i += 1) {
  console.log(i, Math.pow(i, 2), Math.pow(i, 3));
}