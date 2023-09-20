const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length - 1; i += 1) {
  console.log(Number(lines[i]) === 0 ? 'vai ter copa!' : 'vai ter duas!');
}