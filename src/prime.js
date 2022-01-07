import hellow from './hellow.js';
import question from './question.js';

/**
 *
 * @param {простое число} num
 * @returns
 */
const isPrime = (num) => {
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const name = hellow();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const rndNum = Math.floor(Math.random() * 99);
    let expected = 'no';
    if (isPrime(rndNum)) {
      expected = 'yes';
    }
    const quest = `${rndNum}`;
    win = question(quest, expected, name);
    if (win === false) {
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
};
