const path = require('path');
const currentFile = path.dirname(process.argv[1]);
const readline = require('readline');

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vitorias = {
  inter: 0,
  gremio: 0,
  empate: 0,
}

let contadorGrenais = 0;

function contagemDeVitorias() {
  let [I, G] = lines.shift().split(' ');
  I = I === undefined ? 0 : Number(I);
  G = G === undefined ? 0 : Number(G);
  if (I > G) {
    vitorias.inter += 1;
  } else if (G > I) {
    vitorias.gremio += 1;
  } else if (I === G) {
    vitorias.gremio += 1;
  }
}

function dadosFinais() {
  const vencedor = vitorias.inter > vitorias.gremio ? 'Inter' : 'Gremio';
  console.log(
    `${contadorGrenais} grenais\nInter:${vitorias.inter}\nGremio:${vitorias.gremio}\nEmpates:${vitorias.empate}\n${vencedor} venceu mais`);
  }
  
  function fazerPergunta() {
    rl.question('Novo grenal (1-sim 2-nao) \n', (resposta) => {
      if (+resposta === 1) {
        contagemDeVitorias();
        fazerPergunta();
      } else {
      rl.close;
      dadosFinais();
    }
  });
}

fazerPergunta();
