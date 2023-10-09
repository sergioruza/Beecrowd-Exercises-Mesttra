const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const tea = Number(lines.shift());

const participantAnswers = lines.shift().split(' ').map(Number);

let count = 0;
participantAnswers.forEach((e) => {
  if (e === tea) {
    count += 1;
  }
})

console.log(count);