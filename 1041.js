const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [X, Y] = lines[0].split(' ').map((e) => Number(e));

if (X > 0 && Y < 0) {
  console.log('Q4');
} else if (X < 0 && Y < 0) {
  console.log('Q3');
} else if (X < 0 && Y > 0) {
  console.log('Q2');
} else if (X === 0 && Y === 0) {
  console.log('Origem');
} else if (X === 0 && Y !== 0) {
  console.log('Eixo Y');
} else if (Y === 0 && X !== 0) {
  console.log('Eixo X')
} else {
  console.log('Q1');
}