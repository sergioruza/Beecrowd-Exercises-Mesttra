const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

function countCharactersInEnglish(x) {
  const numberWords = [
    "ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE",
    "SIX", "SEVEN", "EIGHT", "NINE"
  ];

  if (x < 10) {
    return numberWords[x].length;
  } else {
    const xString = x.toString();
    return countCharactersInEnglish(xString.length);
  }
}

const result = countCharactersInEnglish(Number(lines[0]));

console.log(result + 1);