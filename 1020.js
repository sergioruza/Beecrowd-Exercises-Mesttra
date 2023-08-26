const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [dias] = lines;

let resto = +dias;

const tempo = {
  ano: 0,
  mes: 0,
  dia: 0
};

tempo.ano = Math.floor(resto / 365);
resto %= 365;

tempo.mes = Math.floor(resto / 30);
resto %= 30;

tempo.dia = resto;

console.log(`${tempo.ano} ano(s)
${tempo.mes} mes(es)
${tempo.dia} dia(s)`);