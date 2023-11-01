const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const byteSplit = lines[0].split('').map(Number);

let countByte = 0;

byteSplit.forEach(e => {
  if (e === 1) countByte += 1
})

if (countByte % 2 === 0) {
  console.log(byteSplit.join('') + '0');
} else {
  console.log(byteSplit.join('') + '1');
}