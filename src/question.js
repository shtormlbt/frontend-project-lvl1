import readLineSync from 'readline-sync';
/**
 *
 * @param {вопрос} quest
 * @param {ответ} expected
 * @param {имя} name
 */
const question = (quest, expected, name) => {
  console.log(`Question: ${quest}`);
  const answer = readLineSync.question('Your answer: ');
  if (answer !== `${expected}`) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${expected}.`);
    console.log(`Let's try again, ${name}`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export default question;
