const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((size) => {
  const matriz = [];

  for (let iLine = 0; iLine < size; iLine += 1) {
    const line = [];

    for (let iColumn = 0; iColumn < size; iColumn += 1) {
      line.push(Math.pow(2, iLine + iColumn))
    }
    matriz.push(line)
  }

  let formatedMatriz = '';

  matriz.forEach((line, i) => {
    if (i !== size - 1) {
      formatedMatriz += `${line.join(' ')}\n`
    } else {
      formatedMatriz += `${line.join(' ')}`
    }
  })

  console.log(formatedMatriz);
})