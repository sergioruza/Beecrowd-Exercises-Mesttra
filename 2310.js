const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

const obj = {
  S: 0,
  B: 0,
  A: 0,
  S1: 0,
  B1: 0,
  A1: 0,
};

for (let i = 1; i < lines.length; i += 3) {
  const [vS, vB, vA] = lines[i].split(' ').map(Number);
  const [vSn, vBn, vAn] = lines[i + 1].split(' ').map(Number);

  obj.S += vS;
  obj.B += vB;
  obj.A += vA;
  obj.S1 += vSn;
  obj.B1 += vBn;
  obj.A1 += vAn;
}

const resultSaque = (obj.S1 / obj.S) * 100;
const resultBlock = (obj.B1 / obj.B) * 100;
const resultAtack = (obj.A1 / obj.A) * 100;

console.log(`Pontos de Saque: ${resultSaque.toFixed(2)} %.`);
console.log(`Pontos de Bloqueio: ${resultBlock.toFixed(2)} %.`);
console.log(`Pontos de Ataque: ${resultAtack.toFixed(2)} %.`);
