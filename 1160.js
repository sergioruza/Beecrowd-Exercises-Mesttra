const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines[0]);
lines.shift();

const numeros = lines.map((e) => e.split(' ').map((num) => Number(num)));


for (let i = 0; i < casos; i += 1) {
  const [PA, PB, G1, G2] = numeros[i];

  let populacaoPA = PA;
  let populacaoPB = PB;
  let anos = 0;
  while (populacaoPA <= populacaoPB) {
    if (anos > 100) break;
    populacaoPA += Math.floor(populacaoPA * (G1 / 100));
    populacaoPB += Math.floor(populacaoPB * (G2 / 100));
    anos += 1;
  }
  console.log(anos <= 100 ? `${anos} anos.` : `Mais de 1 seculo.`);
}