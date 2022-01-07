import hellow from './hellow.js';
import question from './question.js';

export default () => {
  const name = hellow();
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const rndProgressSteep = Math.floor(Math.random() * 9);
    const rndProgressStart = Math.floor(Math.random() * 99);
    const rndHideNum = Math.floor(Math.random() * 9);
    const progression = [rndProgressStart];
    for (let j = 0; j < 9; j += 1) {
      progression.push(progression[j] + rndProgressSteep);
    }
    const expected = progression[rndHideNum];
    progression[rndHideNum] = '..';
    const quest = `${progression}`;
    win = question(quest, expected, name);
    if (win === false) {
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
};
