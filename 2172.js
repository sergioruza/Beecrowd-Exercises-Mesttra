const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i += 1) {
  const e = lines[i];
  const [multiply, num] = e.split(' ').map(Number);
  if (multiply === 0 && num === 0) break;

  console.log(num * multiply);
}