const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

function firstStage(pass) {
  const newPassCrypt = pass.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
        return String.fromCharCode((char.charCodeAt(0) + 3));
    }
    return char;
  });
  
  return newPassCrypt;
}

function thirdStage(pass) {
  const arrayPass = [...pass];
  const half = Math.floor(pass.length / 2);

  for (let i = half; i < pass.length; i += 1) {
    const char = arrayPass[i];
    const newChar = String.fromCharCode((char.charCodeAt(0) - 1));
    arrayPass[i] = newChar
  }

  return arrayPass;
}

for (let i = 0; i < cases; i += 1) {
  const password = lines[i];

  const passStageOne = firstStage(password);

  const passStageTwo = passStageOne.reverse();

  const passStageThree = thirdStage(passStageTwo)

  console.log(passStageThree.join(''));
}
