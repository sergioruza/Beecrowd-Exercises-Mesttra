const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift())

for (let i = 0; i < cases; i += 1) {
  const name = lines[i * 3];
  const difficulty = Number(lines[i * 3 + 1]);
  const scores = lines[i * 3 + 2].split(' ').map(Number);

  scores.sort((a, b) => a - b);

  scores.shift();
  scores.pop();

  const sumScores = scores.reduce((acc, cur) => acc + cur, 0);

  const finalScore = sumScores * difficulty;

  console.log(`${name} ${finalScore.toFixed(2)}`);
}