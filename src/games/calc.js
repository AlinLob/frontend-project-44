/* eslint-disable default-case */
/* eslint-disable consistent-return */
import playGame from '../index.js';

import getRandomNum from '../getRandom.js';

const taskGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const Arrayoperator = ['+', '-', '*'];
  const index = Math.floor(Math.random() * Arrayoperator.length);
  const selectedOperator = Arrayoperator[index];
  return selectedOperator;
};

const getCalculator = (value1, value2, operator) => {
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
  const value1 = getRandomNum(0, 50);
  const value2 = getRandomNum(0, 50);
  const operator = getRandomOperator();
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = getCalculator(value1, value2, operator);
  return [question, correctAnswer];
};

export default () => {
  playGame(taskGame, roundGame);
};
