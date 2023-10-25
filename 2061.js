const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [tabs, actions] = lines.shift().split(' ').map(Number);

let countTabs = tabs;

for (let i = 0; i < actions; i += 1) {
  const action = lines[i]
  if (action === 'fechou') {
    countTabs += 1;
  } else {
    countTabs -= 1
  }
}

console.log(countTabs);