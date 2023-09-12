const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n')[0].split(' ');

let contador = 1;
let casos = Number(lines[0]);
let parada = Number(lines[1]) + 1;
let numeros = [];

while (contador < parada) {
  numeros.push(contador);
  contador += 1;

  if (numeros.length >= casos || contador >= parada) {
    console.log(numeros.join(' '));
    numeros = [];
  }
}
