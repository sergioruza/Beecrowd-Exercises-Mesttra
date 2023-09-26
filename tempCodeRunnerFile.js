const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((e) => {
  const [defectNumber, numbers] = e.split(' ');

  if (numbers) {
    const splitNumbers = numbers.split('');
    let newNumber = splitNumbers.filter((num) => num !== defectNumber);

    let hasZero = 0;
    for (let i = 0; i < newNumber.length; i += 1) {
      const num = newNumber[i];
  
      if (hasZero > 0) {
        newNumber.splice(i);
      }
  
      if (num === '0') {
        hasZero = 1;
      }
    }
  
    if (numbers.length === 1 && numbers[0] === '0') {
      console.log('');
    } else {
      console.log(newNumber.length === 0 ? 0 : newNumber.join(''));
    }
  }
 
})
