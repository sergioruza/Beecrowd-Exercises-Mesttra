const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const cases = Number(lines.shift());

const years = lines.map(Number);

const currentYear = 2015;


for (let i = 0; i < cases; i += 1) {
  const year = years[i];
  let result = '';
  if ((currentYear - year) > 0) {
    result = `${currentYear - year} D.C`;
  } else {
    result = `${(currentYear - year) * -1 + 1} A.C`;
  }

  console.log(result);
}