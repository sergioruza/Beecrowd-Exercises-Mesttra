const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length - 1; i += 1) {
  const e = lines[i];

  let [hour, minutes] = e.split(':').map(Number);

  if (hour > 7 || (hour === 7 && minutes > 0)) {
    let delay = (hour - 7) * 60 + minutes;
    console.log(`Atraso maximo: ${delay}`);
  } else {
    console.log('Atraso maximo: 0');
  }
}