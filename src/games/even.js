/* eslint-disable import/no-duplicates */
import playGame from '../index.js';

import { getRandom } from '../index.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (Number) => Number % 2 === 0;

const roundGame = () => {
  const Number = getRandom(1000);
  const question = `${Number}`;
  const correctAnswer = even(Number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  playGame(taskGame, roundGame);
};
