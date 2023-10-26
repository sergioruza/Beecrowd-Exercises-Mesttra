const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = []

for (let i = 0; i < lines.length; i += 2) {
  cases.push([lines[i], lines[i + 1]])
}

for (let i = 0; i < cases.length; i += 1) {
  const e = cases[i];

  const [sequence, string] = e;

  const countSequential = string.replaceAll(sequence, '$').split('').filter(e => e === '$').length;
  const lastSequence = string.lastIndexOf(sequence) + 1

  if (countSequential === 0) {
    console.log(`Caso #${i + 1}:\nNao existe subsequencia${i !== cases.length-1 && '\n'}`);
  } else {
    console.log(`Caso #${i + 1}:\nQtd.Subsequencias: ${countSequential}\nPos: ${lastSequence}${i !== cases.length-1 ? '\n' : ''}`);
  }
}