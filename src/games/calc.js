/* eslint-disable consistent-return */
/* eslint-disable default-case */
// eslint-disable-next-line import/no-duplicates
import playGame from '../index.js';

// eslint-disable-next-line import/no-duplicates
import { getRandom } from '../index.js';

const taskGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const Arrayoperator = ['+', '-', '*'];
  const index = Math.floor(Math.random() * Arrayoperator.length);
  const selectedOperator = Arrayoperator[index];
  return selectedOperator;
};

const playCalculator = (value1, value2, operator) => {
  switch (operator) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
  }
};

const roundGame = () => {
  const value1 = getRandom(50);
  const value2 = getRandom(50);
  const operator = getRandomOperator();
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = playCalculator(value1, value2, operator);
  return [question, correctAnswer];
};

export default () => {
  playGame(taskGame, roundGame);
};
