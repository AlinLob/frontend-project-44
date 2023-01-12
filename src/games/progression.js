import playGame from '../index.js';

import getRandomNum from '../getRandom.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number1, length, step) => {
  const arithmProgressArr = [];
  for (let i = 0; i < length; i += 1) {
    const number = number1 + (step * i);
    arithmProgressArr.push(number);
  }
  return arithmProgressArr;
};

const roundGame = () => {
  const length = getRandomNum(5, 10);
  const unkownMemberIndex = getRandomNum(0, length);
  const step = getRandomNum(1, 5);
  const number1 = getRandomNum(1, 10);
  const arithmProgressArr = getProgression(number1, length, step);
  const correctAnswer = arithmProgressArr[unkownMemberIndex];
  arithmProgressArr[unkownMemberIndex] = '..';
  const question = arithmProgressArr.join(' ');
  return [question, correctAnswer];
};

export default () => {
  playGame(taskGame, roundGame);
};
