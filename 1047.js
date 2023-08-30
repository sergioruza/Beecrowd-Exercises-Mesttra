const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C, D] = lines[0].split(' ').map((e) => Number(e));

const inicial = A * 60 + B;
const final = C * 60 + D;

let diferenca = final - inicial;

if (inicial === 0 && final === 0 || inicial === final) {
  diferenca = 24 * 60;
}

if (final - inicial < 0) {
  diferenca += 24 * 60;
}

console.log(`O JOGO DUROU ${Math.floor(diferenca / 60)} HORA(S) E ${diferenca % 60} MINUTO(S)`);