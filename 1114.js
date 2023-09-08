const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let e of lines) {
  const senhaCorreta = 2002;
  const senhaInformada = Number(e);

  if (senhaInformada === senhaCorreta) {
    console.log('Acesso Permitido');
    break
  } else {
    console.log('Senha Invalida');
  }
}