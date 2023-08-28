const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let notas = lines[0].split(' ').map((e) => Number(e));
const notaExame = Number(lines[1]);
const pesosRespectivos = [2, 3, 4, 1]


let produtoSoma = 0;
let somaPesos = pesosRespectivos.reduce((acc, cur) => acc + cur);

notas.forEach((e, i) => {
  produtoSoma += e * pesosRespectivos[i];
});

const mediaPonderada = produtoSoma / somaPesos;

let statusAluno = `Media: ${mediaPonderada.toFixed(1)}\n`;

if (mediaPonderada >= 7.0) {
  statusAluno += 'Aluno aprovado.';
} else if (mediaPonderada < 5.0) {
  statusAluno += 'Aluno reprovado.';
} else {
  statusAluno += 'Aluno em exame.\n';
  statusAluno += `Nota do exame: ${notaExame.toFixed(1)}\n`;

  const mediaFinal = (mediaPonderada + notaExame) / 2;
  statusAluno += mediaFinal >= 5.0 ? 'Aluno aprovado.\n' : 'Aluno reprovado.\n';
  statusAluno += `Media final: ${mediaFinal.toFixed(1)}`;
}

console.log(statusAluno);