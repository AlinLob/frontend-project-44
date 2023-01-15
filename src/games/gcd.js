/* eslint-disable import/no-duplicates */
import playGame from '../index.js';

import getRandomNum from '../getRandom.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const roundGame = () => {
  const number1 = Math.abs(getRandomNum(1, 100));
  const number2 = Math.abs(getRandomNum(1, 100));
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return [question, answer];
};

export default () => {
  playGame(taskGame, roundGame);
};
