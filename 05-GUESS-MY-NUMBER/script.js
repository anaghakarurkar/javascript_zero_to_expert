'use strict';

let secretNumber = generateSecretNumber();
let score = 20;
let currentHighScore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let enteredNumber = Number(document.querySelector('.guess').value);
  console.log(enteredNumber, typeof enteredNumber);

  if (!enteredNumber) {
    updateMessage('⛔ No number!');
  } else if (secretNumber === enteredNumber) {
    updateMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    updateHighScore();
  } else if (enteredNumber !== secretNumber) {
    updateScore();
    enteredNumber > secretNumber
      ? updateMessage('To High')
      : updateMessage('To Low');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  updateMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  secretNumber = generateSecretNumber();
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

function updateScore() {
  if (score === 0) {
    updateMessage('🙇 You lost the game');
    return;
  }
  score--;
  document.querySelector('.score').textContent = score;
}

function updateMessage(message) {
  document.querySelector('.message').textContent = message;
}

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function updateHighScore() {
  if (score > currentHighScore) {
    currentHighScore = score;
    document.querySelector('.highscore').textContent = score;
  }
}
