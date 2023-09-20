const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

const casos = Number(lines.shift());

const sheldonWin = 'Bazinga!';
const rajWin = 'Raj trapaceou!';
const draw = 'De novo!';

for (let i = 0; i < casos; i += 1) {
  const [sheldon, raj] = lines[i].split(' ');

  let result = '';
  if (sheldon === raj) {
    result = `Caso #${i + 1}: ${draw}`;
  } else if (sheldon === 'tesoura' && raj === 'papel') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'papel' && raj === 'pedra') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'pedra' && raj === 'lagarto') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'lagarto' && raj === 'Spock') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'Spock' && raj === 'tesoura') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'tesoura' && raj === 'lagarto') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'lagarto' && raj === 'papel') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'papel' && raj === 'Spock') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'Spock' && raj === 'pedra') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else if (sheldon === 'pedra' && raj === 'tesoura') {
    result = `Caso #${i + 1}: ${sheldonWin}`;
  } else {
    result = `Caso #${i + 1}: ${rajWin}`;
  }

  console.log(result);
}
