const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [monthChristmas, dayChristmas] = [12, 25]

const targetDate = new Date(2020, monthChristmas- 1, dayChristmas)

for (let i = 0; i < lines.length - 1; i += 1) {
  const e = lines[i]
  const [month, day] = e.split(' ').map(Number)
  const currentData = new Date(2020, month - 1, day)

  const differenceMilliseconds = targetDate - currentData;

  const days = Math.ceil(differenceMilliseconds / (1000 * 60 * 60 * 24))

  if (day > dayChristmas && month === monthChristmas) {
    console.log('Ja passou!');
  } else if (day === dayChristmas && month === monthChristmas) {
    console.log('E natal!');
  } else if (day === dayChristmas - 1 && month === monthChristmas) {
    console.log('E vespera de natal!');
  } else {
    console.log(`Faltam ${days} dias para o natal!`);
  }
}