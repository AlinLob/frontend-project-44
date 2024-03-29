import playGame from '../index.js';

import getRandomNum from '../getRandom.js';

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (Number) => Number % 2 === 0;

const roundGame = () => {
  const Number = getRandomNum(1, 1000);
  const question = `${Number}`;
  const correctAnswer = even(Number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  playGame(taskGame, roundGame);
};
