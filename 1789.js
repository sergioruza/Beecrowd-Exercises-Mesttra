const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const slugs = lines.filter((e, i) => {
  if (i % 2 !== 0) {
    return e;
  }
})

slugs.forEach((e) => {
  const slugsSpeed = e.split(' ').map((e) => Number(e));

  const maxSpeed = Math.max(...slugsSpeed);

  if (maxSpeed < 10) {
    console.log(1);
  } else if (maxSpeed < 20) {
    console.log(2);
  } else {
    console.log(3);
  }
})