const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let cases = Number(lines.shift());

let result = ['', 0];

for (let i = 0; i < cases; i += 1) {
  const student = lines[i].split(' ');

  if (Number(student[1]) > result[1]) {
    result = student;
  }
}

const string = result[1] < 8 ? 'Minimum note not reached' : result[0];

console.log(string);