let total = 1;

for (let i = 2; i <= 100; i += 1) {
  total += (1 / i)
}

console.log(total.toFixed(2));