const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines.shift())

console.log(`Feliz nat${'a'.repeat(number)}l!`);