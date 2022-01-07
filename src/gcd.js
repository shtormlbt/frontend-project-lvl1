import hellow from './hellow.js';
import question from './question.js';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

export default () => {
  const name = hellow();
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const rndOneNum = Math.floor(Math.random() * 99);
    const rndTwoNum = Math.floor(Math.random() * 99);
    const quest = `${rndOneNum} ${rndTwoNum}`;

    const expected = `${gcd(rndOneNum, rndTwoNum)}`;

    win = question(quest, expected, name);
    if (win === false) {
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
};
