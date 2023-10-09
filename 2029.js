const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

const cases = []

for (let i = 0; i < lines.length; i += 2) {
  cases.push([lines[i], lines[i + 1]])
}

cases.forEach((e) => {
  const [volume, diametro] = e;
  const raio = diametro / 2;
  const altura = volume / (Math.PI * raio ** 2);
  const areaBoca = Math.PI * raio ** 2;

  console.log((altura + 0.01).toFixed(2), areaBoca.toFixed(2));
  
})
