const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = +lines[0];
lines.shift();

const obj = {
  coelhos: 0,
  ratos: 0,
  sapos: 0,
  total: 0
}

for (let i = 0; i < casos; i += 1) {
  let [cobaias, animal] = lines[i].split(' ');
  obj.total += +cobaias;

  switch (animal) {
    case 'C':
      obj.coelhos += +cobaias;
      break;
    case 'R':
      obj.ratos += +cobaias;
      break;
    case 'S':
      obj.sapos += +cobaias;
      break;
  }
}

const percentualCoelhos = ((obj.coelhos / obj.total) * 100).toFixed(2);
const percentualRatos = ((obj.ratos / obj.total) * 100).toFixed(2);
const percentualSapos = ((obj.sapos / obj.total) * 100).toFixed(2);

console.log(
`Total: ${obj.total} cobaias
Total de coelhos: ${obj.coelhos}
Total de ratos: ${obj.ratos}
Total de sapos: ${obj.sapos}
Percentual de coelhos: ${percentualCoelhos} %
Percentual de ratos: ${percentualRatos} %
Percentual de sapos: ${percentualSapos} %`
)