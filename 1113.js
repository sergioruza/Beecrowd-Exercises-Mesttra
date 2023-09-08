const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let e of lines) {
  let [X, Y] = e.split(' ').map((num) => Number(num));

  if (X < Y) {
    console.log('Crescente');
  } else if (X > Y) {
    console.log('Decrescente');
  }
}