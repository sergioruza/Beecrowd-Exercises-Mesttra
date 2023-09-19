const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const linhaOperacao = Number(lines.shift());
const operacao = lines.shift();


function matriz() {
  const numeros = lines.map((e) => Number(e));
  const matriz = [];

  for (let i = 0; i < 12; i += 1) {
    const linha = [];

    for (let j = 0; j < 12; j += 1) {
        linha.push(numeros.shift());
    }

    matriz.push(linha);
  }
  
  return matriz;
}

function operacaoComMatriz() {
  const matrizPronta = matriz();

  const linhaMatriz = matrizPronta[linhaOperacao];

  const soma = linhaMatriz.reduce((acc, cur) => acc + cur);

  if (operacao === 'S') {
    return soma.toFixed(1);
  } else {
    return (soma / linhaMatriz.length).toFixed(1);
  }
}

console.log(operacaoComMatriz())