const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n')[0].split(' ');

const originalPrice = Number(lines.shift());
const increasePrice = Number(lines.shift());

const result = ((increasePrice - originalPrice) / originalPrice) * 100;

console.log(result.toFixed(2) + '%');
