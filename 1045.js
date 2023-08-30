const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores = lines[0].split(' ').map((e) => Number(e));

const [A, B, C] = valores.sort((a, b) => b - a);

const trianguloRetangulo = Math.pow(A, 2) === (Math.pow(B, 2) + Math.pow(C, 2));
const trianguloObtusangulo = Math.pow(A, 2) > (Math.pow(B, 2) + Math.pow(C, 2));
const trianguloAcutangulo = Math.pow(A, 2) < (Math.pow(B, 2) + Math.pow(C, 2));
const trianguloEquilatero = A === B && B === C;
const trianguloIsosceles = A === B ||  B === C  ||  C === A;

if (A >= (B + C)) {
  console.log('NAO FORMA TRIANGULO');
} else if (trianguloRetangulo) {
  console.log('TRIANGULO RETANGULO');
} else if (trianguloObtusangulo) {
  console.log('TRIANGULO OBTUSANGULO');
} else if (trianguloAcutangulo) {
  console.log('TRIANGULO ACUTANGULO');
}

if (trianguloEquilatero) {
  console.log('TRIANGULO EQUILATERO');
} else if (trianguloIsosceles) {
  console.log('TRIANGULO ISOSCELES');
}



// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES