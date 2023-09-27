const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((e, i) => {
  let words = e.split(' ');
  let contador = 0;
  while (contador < words.length) {
    const word = words[contador];
    
    let wordFormat = '';
    if (word.includes('_') || word.includes('*')) {
      wordFormat = word.replace(/(_|\*)/g, (match) => {
        if (match === '_') {
          return '<i>';
        } else if (match === '*') {
          return '<b>';
        }
      });
      wordFormat = wordFormat.replace(/(_|\*)/g, (match) => {
        if (match === '_') {
          return '</i>';
        } else if (match === '*') {
          return '</b>';
        }
      });
      words[contador] = wordFormat;
    }

    contador += 1;
  }
  console.log(words.join(' '));

});

// auxilio chatGPT