const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

function firstStadium(pass) {
  const newPassCrypt = '';

  for (let i = 0; i < pass.length; i += 1) {
    const char = pass.charAt(i);

    const regex = /[a-z]/;
    if (regex.test(char)) {
      
    }
  }
}

for (let i = 0; i < cases; i += 1) {
  const password = lines[i];


}

console.log("ABC".charCodeAt(0));