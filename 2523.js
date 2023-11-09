const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 2; i < lines.length; i += 3) {
  const letters = lines[i - 2].split('');
  const cases = Number(lines[i - 1]);
  const positions = lines[i].split(' ').map(Number)
  
  let word = ''
  
  for (let j = 0; j < cases; j += 1) {
    const index = positions[j] - 1;
    word += letters[index]
  }

  console.log(word);
}