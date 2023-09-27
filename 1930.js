const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const powerStripSockets = lines.shift().split(' ').map(Number);

let maxNumConnectedDevices = 0;

powerStripSockets.forEach((e, i) => {
  if (i !== powerStripSockets.length - 1) {
    maxNumConnectedDevices += (e - 1);
  } else {
    maxNumConnectedDevices += e;
  }
})

console.log(maxNumConnectedDevices);