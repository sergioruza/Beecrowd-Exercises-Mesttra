const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

for (let i = 0; i < lines.length - 1; i += 1) {
  const e = lines[i];
  console.log(e - 1);
}