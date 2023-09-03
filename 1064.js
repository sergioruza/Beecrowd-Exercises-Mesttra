const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.map((e) => Number(e));

let countPositivo = 0;
let sum = 0;

numeros.forEach((e) => {
  if (e > 0) { 
    countPositivo += 1;
    sum += e
  }
});

console.log(
`${countPositivo} valores positivos
${(sum / countPositivo).toFixed(1)}`);