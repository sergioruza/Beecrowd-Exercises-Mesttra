const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n')[0].split(' ').map(Number)

const [p, j1, j2, r, a] = lines;

let resultP1;
let resultP2;

if (p === 1) {
  resultP1 = 'par'
  resultP2 = 'impar'
} else {
  resultP1 = 'impar'
  resultP2 = 'par'
}


const evenOrOdd = (j1 + j2) % 2 === 0 ? 'par' : 'impar'

if (r === 0 && a === 0) {
  console.log(evenOrOdd === resultP1 ? 'Jogador 1 ganha!' : 'Jogador 2 ganha!');
} else if (r === 1 && a === 0) {
  console.log('Jogador 1 ganha!');
} else if (r === 1 && a === 1) {
  console.log('Jogador 2 ganha!');
}