const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines.shift());

const raiosFios = lines.map((e) => e.split(' '));

for (let i = 0; i < casos; i += 1) {
  const [R1, R2] = raiosFios[i];

  console.log(+R1 + +R2);
}