const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map((e) => Number(e));

const idades = [];

for (let i of lines) {
  if (i < 0) break
  idades.push(i);
}

const media = idades.reduce((acc, cur) => acc + cur, 0) / idades.length;

console.log(media.toFixed(2));