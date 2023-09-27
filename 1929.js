const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const rods = lines.shift().split(' ').map(Number);
rods.sort((x, y) => x - y)

let possible = false;
for (let i = 0; i < 2; i += 1) {

  if ((rods[i] + rods[i + 1]) > rods[i + 2]) {
    possible += true;
  }
}

console.log(possible ? 'S' : 'N');