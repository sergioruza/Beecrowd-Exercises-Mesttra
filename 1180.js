const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines.shift());

const array = lines[0].split(' ').map((e) => Number(e));

const min = Math.min(...array);

const index = array.findIndex((e) => e === min);

console.log(
`Menor valor: ${min}
Posicao: ${index}`
)
