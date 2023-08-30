const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const [t1, t2, t3] = lines;

const obj = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba",
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca"
    }
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta"
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca"
    }
  },
};

console.log(obj[t1][t2][t3]);