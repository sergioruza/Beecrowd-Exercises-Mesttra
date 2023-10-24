const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n')

const cases = Number(lines.shift());

const jogadas = []

for (let i = 0; i < lines.length; i += 2) {
  jogadas.push([lines[i], lines[i + 1]])
}

for (let i = 0; i < cases; i += 1) {
  const [player1, player2] = jogadas[i];

  if (player1 === 'ataque' && player2 === 'pedra') {
    console.log('Jogador 1 venceu');
  } else if (player1 === 'pedra' && player2 === 'papel') {
    console.log('Jogador 1 venceu');
  } else if (player1 === 'ataque' && player2 === 'papel') {
    console.log('Jogador 1 venceu');
  } else if (player1 === 'papel' && player2 === 'papel') {
    console.log('Ambos venceram');
  } else if (player1 === 'pedra' && player2 === 'pedra') {
    console.log('Sem ganhador');
  } else if (player1 === 'ataque' && player2 === 'ataque') {
    console.log('Aniquilacao mutua');
  } else {
    console.log('Jogador 2 venceu');
  }
}