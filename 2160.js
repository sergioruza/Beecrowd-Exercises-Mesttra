const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n')[0];

if (lines.length > 80) {
  console.log('NO');
} else {
  console.log('YES');
}