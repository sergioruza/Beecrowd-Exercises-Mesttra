let total = 1;

let contadorDivisor = 2;

for (let i = 3; i <= 39; i += 2) {
  total += (i / contadorDivisor);
  contadorDivisor *= 2;
}

console.log(total.toFixed(2));