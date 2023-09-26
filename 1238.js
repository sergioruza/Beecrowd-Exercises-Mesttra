const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

function formatString(A, B) {
  const splitA = A.split('');
  const splitB = B.split('');
  const min = Math.min(splitA.length, splitB.length);

  let string = '';
  for (let i = 0; i < min; i += 1) {
    string += splitA.shift()
    string += splitB.shift();
  }

  if (splitA.length !== 0) {
    string += splitA.join('');
  } else {
    string += splitB.join('');
  }

  return string;
}

for (let i = 0; i < cases; i += 1) {
  const [A, B] = lines[i].split(' ');

  const word = formatString(A, B);

  console.log(word);
}