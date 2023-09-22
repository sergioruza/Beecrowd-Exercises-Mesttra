const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


function blinkToBinaryToNumber(code) {
  const codeSplit = code.split('');
  let binary = '';

  codeSplit.forEach((e) => {
    if (e === '*') {
      binary += '1';
    } else {
      binary += '0'
    }
  });

  const convertBinaryToNumber = parseInt(binary, 2);

  return convertBinaryToNumber;
}

function main() {
  let sum = 0;

  for (let i of lines) {
    const item = i;

    if (item === 'caw caw') {
      console.log(sum);
      sum = 0;
    } else {
      sum += blinkToBinaryToNumber(item);
    }
  }
}

main();