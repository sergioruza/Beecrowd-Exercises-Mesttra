const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.map((e) => Number(e));

let countPar = 0;

numeros.forEach((e) => {
  if (e % 2 === 0) { 
    countPar += 1;
  }
});

console.log(`${countPar} valores pares`);