let I = 0;
let J = 1;

let count = 1;
let sum = 0;
while (I <= 2) {
  let formatarI = Number.isInteger(I) ? I.toFixed(0) : I.toFixed(1);
  let formatarJ = Number.isInteger(I) ? J.toFixed(0) : (J + sum).toFixed(1);
  
  formatarI = formatarI.endsWith('.0') ? formatarI.slice(0, -2) : formatarI;
  formatarJ = formatarJ.endsWith('.0') ? formatarJ.slice(0, -2) : formatarJ;
  
  console.log(`I=${formatarI} J=${formatarJ}`);

  if (count === 3) {
    count = 1;
    I += 0.2;
    J = 1;
    sum = (sum > 1 ? 0.2 : sum + 0.2)
  } else {
    count += 1
    J += 1
  }
}
