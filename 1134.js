const path = require('path');
const currentFile = path.dirname(process.argv[1]);
const readline = require('readline');

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const combustiveis = {
  alcool: 0,
  gasolina: 0,
  diesel: 0
}

function contagem(input) {
  if (input === 1) {
    combustiveis.alcool += 1;
  } else if (input === 2) {
    combustiveis.gasolina += 1;
  } else {
    combustiveis.diesel += 1;
  }
}

function comandosEntrada() {
  rl.question('', (input) => {
    input = Number(input);
    if (input > 0 && input < 4) {
      contagem(input);
      comandosEntrada();
    } else if (input === 4) {
      const { alcool, gasolina, diesel } = combustiveis;
      console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`);
      rl.close();
    } else {
      comandosEntrada();
    }
  })
}

comandosEntrada();