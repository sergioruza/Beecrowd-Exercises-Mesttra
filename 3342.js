const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const boardHouses = Math.pow(Number(lines.shift()), 2)

const white = Math.ceil((boardHouses / 2))

const black = Math.floor((boardHouses / 2))

console.log(`${white} casas brancas e ${black} casas pretas`);
