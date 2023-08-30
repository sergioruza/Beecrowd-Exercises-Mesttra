const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [salario] = lines[0].split(' ').map((e) => Number(e));

let salarioAjustado = salario;
let porcentagemReajuste = 0;

if (salario <= 400.00) {
  salarioAjustado += salario * 0.15;
  porcentagemReajuste = 15;
} else if(salario <= 800.00) {
  salarioAjustado += salario * 0.12;
  porcentagemReajuste = 12;
} else if (salario <= 1200.00) {
  salarioAjustado += salario * 0.10;
  porcentagemReajuste = 10;
} else if (salario <= 2000.00) {
  salarioAjustado += salario * 0.07;
  porcentagemReajuste = 7;
} else {
  salarioAjustado += salario * 0.04;
  porcentagemReajuste = 4;
}

const valorReajuste = salarioAjustado - salario;

console.log(
`Novo salario: ${salarioAjustado.toFixed(2)}
Reajuste ganho: ${valorReajuste.toFixed(2)}
Em percentual: ${porcentagemReajuste} %`);