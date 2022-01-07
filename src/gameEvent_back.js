import readLineSync from 'readline-sync';
import hellow from './hellow.js';

export default () => {
  const name = hellow();
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const rndNum = Math.floor(Math.random() * 1000);
    console.log(`Question: ${rndNum}`);
    const answer = readLineSync.question('Your answer: ');
    if (rndNum % 2 === 0 && answer !== 'yes') {
      console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log(`Let's try again, ${name}`);
      win = false;
      break;
    } else
    if (rndNum % 2 !== 0 && answer !== 'no') {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}`);
      win = false;
      break;
    } else {
      console.log('Correct!');
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
};
