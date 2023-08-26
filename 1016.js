const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ km ] = lines;

const minutos = +km * 2;

console.log(`${minutos} minutos`);
