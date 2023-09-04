const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const inicial = Number(lines[0]);


let count = 0;
let numEncrementa = inicial;

while (count < 6) {
  if (numEncrementa % 2 !== 0) {
    console.log(numEncrementa);
    count += 1;
  }
  numEncrementa += 1;
}