const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(e => Number(e));

lines.forEach((e, i) => {
  if (e <= 0) {
    console.log(`X[${i}] = 1`);
  } else {
    console.log(`X[${i}] = ${e}`);
  }
});
