const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(e => Number(e));

let [X, Y] = lines;

X = Math.min(lines[0], lines[1]) + 1;
Y = Math.max(lines[0], lines[1]);


for (let i = X; i < Y; i += 1) {
  if (i % 5 === 2 || i % 5 === 3) console.log(i);;
}
