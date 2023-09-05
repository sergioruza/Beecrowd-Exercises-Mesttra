const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');
const casos = +lines[0];

const numeros = lines.map((e) => Number(e));

numeros.shift();

// numeros.forEach((num) => {
//   if (num === 0) {
//     console.log('NULL');
//   } else if (num < 0) {
//     if (num % 2 === 0) {
//       console.log('EVEN NEGATIVE');
//     } else {
//       console.log('ODD NEGATIVE');
//     }
//   } else {
//     if (num % 2 === 0) {
//       console.log('EVEN POSITIVE');
//     } else {
//       console.log('ODD POSITIVE');
//     }
//   } 
// })

for (let i = 0; i < casos; i++) {
  const num = numeros[i];

  if (num === 0) {
    console.log('NULL');
  } else if (num < 0) {
    if (num % 2 === 0) {
      console.log('EVEN NEGATIVE');
    } else {
      console.log('ODD NEGATIVE');
    }
  } else {
    if (num % 2 === 0) {
      console.log('EVEN POSITIVE');
    } else {
      console.log('ODD POSITIVE');
    }
  } 
}