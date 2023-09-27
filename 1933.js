const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cards = lines.shift().split(' ').map(Number);

const max = Math.max(...cards);

console.log(max);