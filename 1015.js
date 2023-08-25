const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [x1, y1] = lines[0].split(' ');
const [x2, y2] = lines[1].split(' ');

const a = Math.pow((+x2 - +x1), 2);
const b = Math.pow((+y2 - +y1), 2);

const distancia = Math.sqrt(a + b).toFixed(4);

console.log(distancia);