const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [seg] = lines;

let resto = seg;

const obj = {
  h: 0,
  m: 0,
  s: 0
}

obj.h = Math.floor(resto / 3600);
resto %= 3600;

obj.m = Math.floor(resto / 60);
resto %= 60;

obj.s = resto;


console.log(`${obj.h}:${obj.m}:${obj.s}`);