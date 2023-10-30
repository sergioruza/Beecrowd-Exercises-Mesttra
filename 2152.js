const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

function format(s) {
  return '0' + s
}

for (let i = 0; i < cases; i += 1) {
  const [H, M, door] = lines[i].split(' ');

  const string = `${H.length === 1 ? format(H) : H}:${M.length === 1 ? format(M) : M} - `;

  if (door === '0') {
    console.log(string + 'A porta fechou!');
  } else {
    console.log(string + 'A porta abriu!');
  }
}