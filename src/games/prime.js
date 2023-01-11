import playGame, { getRandom } from '../index.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const roundGame = () => {
  const number = Math.abs(getRandom(1, 100));
  const question = number;
  const correctAnswer = getPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  playGame(taskGame, roundGame);
};
