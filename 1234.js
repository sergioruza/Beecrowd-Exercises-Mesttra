const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((e) => {
  let resultString = '';
  let uppercase = true;

  for (let i = 0; i < e.length; i += 1) {
    const char = e.charAt(i);

    if (char.match(/[a-zA-Z]/)) {
      if (uppercase) {
        resultString += char.toUpperCase();
      } else {
        resultString += char.toLowerCase();
      }

      uppercase = !uppercase;
    } else {
      resultString += char;
    }
  }

  console.log(resultString);
})