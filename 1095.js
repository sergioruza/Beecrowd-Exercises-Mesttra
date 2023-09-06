let I = 1;
let J = 7;

let count = 1;

while (I <= 9) {
  console.log(`I=${I} J=${J}`);

  if (count === 3) {
    count = 1;
    I += 2;
    J = 7
  } else {
    count += 1
    J -= 1
  }
}