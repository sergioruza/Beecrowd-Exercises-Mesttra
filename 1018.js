const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [valor] = lines;

const cedulasContadas = {
  100: 0,
  50: 0,
  20: 0,
  10: 0,
  5: 0,
  2: 0,
  1: 0,
  
};
const cedulasValor = Object.keys(cedulasContadas).reverse()

let resto = valor
let string = `${valor}\n`;

cedulasValor.forEach((e, i) => {
  const a = cedulasContadas[e] = Math.floor(resto / +e)
  resto %= +e;
  if (i === cedulasValor.length - 1) {
    string += `${a} nota(s) de R$ ${Number(e).toFixed(2)}`
  } else {
    string += `${a} nota(s) de R$ ${Number(e).toFixed(2)}\n`
  }
});


console.log(string.replace(/\./g, ','));