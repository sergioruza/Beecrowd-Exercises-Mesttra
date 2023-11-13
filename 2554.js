const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [population, casesResultTest] = lines.shift().split(' ').map(Number)

let testNotes = [];
for (let i = 0; i < population; i += 1) {
  testNotes.push(Number(lines.shift()));
}
testNotes.sort((a, b) => b - a)

for (let i = 0; i < casesResultTest; i += 1) {
  const position = Number(lines[i]);
  
  console.log(testNotes[position - 1]);
}