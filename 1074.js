const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.map((e) => Number(e));

numeros.shift();

numeros.forEach((num) => {
  if (num === 0) {
    console.log('NULL');
  } else {
    if (num % 2 === 0) {
      console.log('EVEN', num > 0 ? 'POSITIVE' : 'NEGATIVE');
    } else {
      console.log('ODD', num > 0 ? 'POSITIVE' : 'NEGATIVE');
    }
  }
})