const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(e => Number(e)).filter((e) => e !== 0);

let pares = [];
let impares = [];

function imprimirValores(parOuImpar) {
  const array = parOuImpar === 'par' ? pares : impares;

  array.forEach((e, i) => {
    console.log(`${parOuImpar}[${i}] = ${e}`);
  });
  
  if (parOuImpar === 'par') {
    pares = [];
  } else {
    impares = [];
  }
}

lines.forEach((e) => {
  if (pares.length === 5) {
    imprimirValores('par');
  } else if (impares.length === 5) {
    imprimirValores('impar');
  }

  if (e % 2 === 0) {
    pares.push(e);
  } else {
    impares.push(e);
  }
})

imprimirValores('impar');

imprimirValores('par');
