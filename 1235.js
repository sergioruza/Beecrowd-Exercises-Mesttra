const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

for (let i = 0; i < cases; i += 1) {
  const phrase = lines[i].split('');
  
  const half = phrase.length / 2;

  let rightHalf = [];
  let leftHalf = [];

  for (let j = 0; j < phrase.length; j += 1) {
    if (j >= half) {
      rightHalf.push(phrase[j]);
    } else {
      leftHalf.push(phrase[j]);
    }
  }

  let finalString = '';
  finalString += leftHalf.reverse().join('');
  finalString += rightHalf.reverse().join('');

  console.log(finalString);
}