const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [num1, num2] = lines[0].split(' ').map(Number)

console.log((num1 / num2).toFixed(2));