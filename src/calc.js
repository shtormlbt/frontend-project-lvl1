import hellow from './hellow.js';
import question from './question.js';

export default () => {
  const name = hellow();
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const rndOneNum = Math.floor(Math.random() * 99);
    const rndTwoNum = Math.floor(Math.random() * 99);
    const rndSign = Math.floor(Math.random() * 3);
    let quest = '';
    let expected = '';
    if (rndSign === 0) {
      expected = rndOneNum + rndTwoNum;
      quest = `${rndOneNum} + ${rndTwoNum}`;
    }
    if (rndSign === 1) {
      expected = rndOneNum - rndTwoNum;
      quest = `${rndOneNum} - ${rndTwoNum}`;
    }
    if (rndSign === 2) {
      expected = rndOneNum * rndTwoNum;
      quest = `${rndOneNum} * ${rndTwoNum}`;
    }
    win = question(quest, expected, name);
    if (win === false) {
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
};
