const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.map((e) => Number(e));

const maiorNumero = Math.max(...numeros);

const indice = numeros.findIndex((e) => e === maiorNumero);

console.log(maiorNumero + '\n' + (indice + 1));

