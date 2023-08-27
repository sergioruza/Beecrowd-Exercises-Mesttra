const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C, D] = lines[0].split(' ');
A = +A;
B = +B;
C = +C;
D = +D;

const v1 = B > C;
const v2 = D > A;
const v3 = (C + D) > (A + B);
const v4 = (C >= 0) && (D >= 0);
const v5 = A % 2 === 0;

if (v1 && v2 && v3 && v4 && v5) {
  console.log('Valores aceitos');
} else {
  console.log('Valores nao aceitos');
}