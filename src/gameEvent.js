import hellow from './hellow.js';
import question from './question.js';

export default () => {
  const name = hellow();
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const rndNum = Math.floor(Math.random() * 1000);
    let expected = '';
    if (rndNum % 2 === 0) {
      expected = 'yes';
    } else {
      expected = 'no';
    }
    win = question(rndNum, expected, name);
    if (win === false) {
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
};
