const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [tempo, velocidadeMedia] = lines;

const distancia = +velocidadeMedia * +tempo;

const litros = (distancia / 12).toFixed(3);

console.log(litros);

