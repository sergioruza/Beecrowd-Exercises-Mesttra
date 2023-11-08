const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const word = lines[0]

if (word.length >= 10) {
  console.log('palavrao');
} else {
  console.log('palavrinha');
}