const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

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

function operacaoMatriz() {
  const matrizPronta = matriz();

  let soma = 0;
  let contador = 0;

  matrizPronta.forEach((e, i) => {
    for (let j = i + 1; j < 12; j += 1) {
      soma += e[j];
      contador += 1;
    }
  })

  if (operacao === 'S') {
    return soma.toFixed(1);
  } else {
    return (soma / contador).toFixed(1);
  }
}

console.log(operacaoMatriz());
