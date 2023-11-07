const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines[0])

const sqrt = Math.sqrt(5);
const A = (1 + sqrt) / 2;
const B = (1 - sqrt) / 2;

const result = Math.round((Math.pow(A, number) - Math.pow(B, number)) / sqrt);

console.log(result.toFixed(1));