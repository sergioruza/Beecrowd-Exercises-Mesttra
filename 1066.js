const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.map((e) => Number(e));

const obj = {
  impares: 0,
  pares: 0,
  positivos: 0,
  negativos: 0
}

numeros.forEach((num) => {
  if (num % 2 === 0) {
    obj.pares++;
  } else {
    obj.impares++;
  }

  if (num > 0) {
    obj.positivos++;
  } else if (num < 0) {
    obj.negativos++;
  }
});

console.log(
  `${obj.pares} valor(es) par(es)
  ${obj.impares} valor(es) impar(es)
  ${obj.positivos} valor(es) positivo(s)
  ${obj.negativos} valor(es) negativo(s)`
)