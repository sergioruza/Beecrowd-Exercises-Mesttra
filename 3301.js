const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines[0].split(' ').map(Number)

const obj = {
  0: 'huguinho',
  1: 'zezinho',
  2: 'luisinho'
}

const max = numbers.findIndex((e) => e === Math.max(...numbers))
const min = numbers.findIndex((e) => e === Math.min(...numbers))

const indexResult = numbers.length - (max + min);
console.log(obj[indexResult]);


