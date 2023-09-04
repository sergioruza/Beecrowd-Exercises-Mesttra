const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const numeros = lines.map((e) => Number(e));

numeros.shift();

const obj = {
  in: 0,
  out: 0
}

for (let i = 0; i < numeros.length - 1; i += 1) {
  if (numeros[i] >= 10 && numeros[i] <= 20) {
    obj.in += 1;
  } else {
    obj.out += 1;
  }
}

console.log(
`${obj.in} in
${obj.out} out`
)