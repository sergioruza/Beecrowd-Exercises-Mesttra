const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

const quantLedsToNum = {
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6,
  0: 6
} 

for (let i = 0; i < cases; i += 1) {
  const numberLed = lines[i].split('');
  let sumLeds = 0;

  numberLed.forEach((e) => sumLeds += quantLedsToNum[e]);

  console.log(sumLeds, 'leds');
}