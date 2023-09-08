const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let e of lines) {
  let [X, Y] = e.split(' ').map((num) => Number(num));

  if(X === 0 || Y === 0) break

  if (X > 0 && Y > 0) {
    console.log('primeiro');
  } else if (X > 0 && Y < 0) {
    console.log('quarto');
  } else if (X < 0 && Y < 0) {
    console.log('terceiro');
  } else {
    console.log('segundo');
  }
}