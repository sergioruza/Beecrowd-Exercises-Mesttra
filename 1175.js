const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map(e => Number(e));


lines.reverse().forEach((e, i) => console.log(`N[${i}] = ${e}`));