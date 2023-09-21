const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n').map((e) => e.split(' ').map((e) => Number(e)));

const happy = ':)';
const sad = ':(';

lines.forEach((e) => {
  const [first, second, third] = e;

  if (first > second && second <= third) {
    console.log(happy);
  } else if (first < second && second >= third) {
    console.log(sad);
  } else if (first < second && second < third && (second - first) > (third - second)) {
    console.log(sad);
  } else if (first < second && second < third && (second - first) <= (third - second)) {
    console.log(happy);
  } else if (first > second && second > third && (first - second) > (second - third)) {
    console.log(happy);
  } else if (first > second && second > third && (first - second) <= (second - third)) {
    console.log(sad);
  } else if (first === second) {
    if (second < third) {
      console.log(happy);
    } else {
      console.log(sad);
    }
  }
})