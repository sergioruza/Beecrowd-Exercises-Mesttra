const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
const readline = require('readline');
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
    vitorias.empate += 1;
  }
}

function dadosFinais() {
  const vencedor = vitorias.inter > vitorias.gremio ? 'Inter' : 'Gremio';
  console.log(
    `${contadorGrenais} grenais\nInter:${vitorias.inter}\nGremio:${vitorias.gremio}\nEmpates:${vitorias.empate}\n${vencedor} venceu mais`);
  rl.close();
  }
  
function fazerPergunta() {
  if (contadorGrenais < lines.length) {
    rl.question('Novo grenal (1-sim 2-nao) \n', (resposta) => {
      if (+resposta === 1) {
        contagemDeVitorias();
        fazerPergunta();
        contadorGrenais += 1;
      } else if (+ resposta === 2) {
      dadosFinais();
      } else {
        rl.close();
    }
  });
  } else {
    rl.close();
  }
}

fazerPergunta();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let vitorias = {
//   inter: 0,
//   gremio: 0,
//   empate: 0,
// }

// let grenais = 0;
// function dadosFinais() {
//   console.log(`${grenais} grenais`);
//   console.log(`Inter:${vitorias.inter}`);
//   console.log(`Gremio:${vitorias.gremio}`);
//   console.log(`Empates:${vitorias.empate}`);
//   if (vitorias.inter > vitorias.gremio) {
//     console.log('Inter venceu mais');
//   } else if (vitorias.gremio > vitorias.inter) {
//     console.log('Gremio venceu mais');
//   }
//   rl.close();
// }

// function comecarJogo() {
//   if (grenais < lines.length) {
//     const [golsInter, golsGremio] = lines[grenais].split(' ').map(Number);
    
//     if (golsInter > golsGremio) {
//       vitorias.inter++;
//     } else if (golsGremio > golsInter) {
//       vitorias.gremio++;
//     } else if (golsGremio === golsInter) {
//       vitorias.empate++;
//     }

//     rl.question('Novo grenal (1-sim 2-nao)\n', (response) => {
//       if (response === '1') {
//         comecarJogo();
//         grenais++;
//       } else {
//         dadosFinais();
//       }
//     });
//   } else {
//     dadosFinais();
//   }
// }

// comecarJogo();