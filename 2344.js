const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines.shift());

if (number === 0) {
  console.log('E');
} else if (number <= 35) {
  console.log('D');
} else if (number <= 60) {
  console.log('C');
} else if (number <= 85) {
  console.log('B');
} else {
  console.log('A');
}