const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let [value] = lines;
value = +value;

const moedasENotas = [
  { valor: 100.00 },
  { valor: 50.00 },
  { valor: 20.00 },
  { valor: 10.00 },
  { valor: 5.00 },
  { valor: 2.00 },
  { valor: 1.00 },
  { valor: 0.5 },
  { valor: 0.25 },
  { valor: 0.1 },
  { valor: 0.05 },
  { valor: 0.01 }
];

const quantidadeNotas = [];
const quantidadeMoedas = [];


let resto = Math.round(value * 100);
moedasENotas.forEach((e) => {
  const contador = Math.floor(resto / (e.valor * 100));
  resto %= Math.round(e.valor * 100);

  if (e.valor >= 2) {
    quantidadeNotas.push(`${contador} nota(s) de R$ ${e.valor.toFixed(2)}`);
  } else {
    quantidadeMoedas.push(`${contador} moeda(s) de R$ ${e.valor.toFixed(2)}`);
  }
});

console.log(
`NOTAS:
${quantidadeNotas.join('\n')}
MOEDAS:
${quantidadeMoedas.join('\n')}`);