import playGame from '../index.js';

import { getRandom } from '../index.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const calculation = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return calculation(number2, number1 % number2);
};

const roundGame = () => {
  const number1 = Math.abs(getRandom(100));
  const number2 = Math.abs(getRandom(100));
  const question = `${number1} ${number2}`;
  const answer = calculation(number1, number2);
  return [question, answer];
};

export default () => {
  playGame(taskGame, roundGame);
};
