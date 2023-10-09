const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casesNumbers = lines.map(Number);

function generateSequence(N) {
  const sequence = [0];
  let totalNumbers = 1;

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j < i; j++) {
      sequence.push(i);
      totalNumbers++;
    }
  }

  return { totalNumbers, sequence };
}

casesNumbers.forEach((e, index) => {
  const { totalNumbers, sequence } = generateSequence(e);

  console.log(`Caso ${index + 1}: ${totalNumbers} ${totalNumbers === 1 ? 'numero' : 'numeros'}`);
  console.log(sequence.join(' ') + `${index === lines.length - 1 ? '' : '\n'}`);
});



