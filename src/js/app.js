import Playboard from './playboard';
import GamePlay from './gamePlay';

// TODO: write code here

const boardContainer = document.querySelector('.board-container');
const board = new Playboard(boardContainer);
const gamePlay = new GamePlay(boardContainer);
let interval = null;

const game = () => {
  board.drawGoblin();
  if (!gamePlay.gameStatus()) {
    clearInterval(interval);
    board.drawModal(gamePlay.modalMessage());
  }
};

document.addEventListener('DOMContentLoaded', () => {
  board.drawBoard();
  interval = setInterval(() => game(), 1000);
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal_button')) {
    interval = setInterval(() => game(), 1000);
    board.reDrawStats();
    boardContainer.removeChild(boardContainer.querySelector('.modal'));
  }
});
