const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let [value] = lines;
value = +value;

const a = value >= 0 && value <= 25;
const b = value > 25 && value <= 50;
const c = value > 50 && value <= 75;
const d = value > 75 && value <= 100;

const arrayVerificar = [a, b, c, d];
const arrayIntervalo = ['[0,25]', '(25,50]', '(50,75]', '(75,100]'];

let string = 'Fora de intervalo';
  arrayVerificar.forEach((e, i) => {
    if (e) string = `Intervalo ${arrayIntervalo[i]}`;
  });

console.log(string);

