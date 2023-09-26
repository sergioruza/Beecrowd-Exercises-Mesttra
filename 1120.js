const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((e) => {
  const [defectNumber, numbers] = e.split(' ');

  if (numbers) {
    let result = '';
    let leadingZero = true;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== defectNumber) {
        if (numbers[i] !== '0') {
          leadingZero = false;
        }
        if (!leadingZero) {
          result += numbers[i];
        }
      }
    }

    if (result === '') {
      if(!(numbers.length === 1 && numbers[0] === '0')) console.log('0');
    } else {
      console.log(result);
    }
  }
});
