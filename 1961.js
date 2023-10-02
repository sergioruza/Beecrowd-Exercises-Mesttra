const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let [jumpHeight, numberOfJumps] = lines.shift().split(' ');
jumpHeight = Number(jumpHeight);
numberOfJumps = Number(numberOfJumps);

const pipes = lines.shift().split(' ').map(Number);

let result = 'YOU WIN';
for (let i = 1; i < numberOfJumps; i += 1) {
  const nextPipe =  pipes[i]
  const pipe = pipes[i - 1];

  const difference = Math.abs(nextPipe - pipe);

  const number = difference < 0 ? difference * -1 : difference;

  if (number > jumpHeight) {
    result = 'GAME OVER';
  }
}

console.log(result);