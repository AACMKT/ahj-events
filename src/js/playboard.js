import drawLifes from './utils';

export default class Playboard {
  constructor(element) {
    this._element = element;
    this.lifesCounter = 5;
  }

  generateRandom(cells, selectedCell) {
    const num = Math.floor(Math.random() * cells.length);
    return Number(selectedCell) === num
      ? this.generateRandom(cells, selectedCell)
      : num;
  }

  drawModal(text) {
    if (!this._element.firstElementChild.classList.contains('modal')) {
      const modalContainer = document.createElement('div');
      modalContainer.classList.add('modal');
      const modal = document.createElement('div');
      modal.classList.add('modal__box');
      const textContainer = document.createElement('h1');
      textContainer.textContent = text;
      const btn = document.createElement('button');
      btn.classList.add('modal_button');
      btn.textContent = 'New Game';
      modal.appendChild(textContainer);
      modal.appendChild(btn);
      modalContainer.appendChild(modal);
      this._element.insertBefore(modalContainer, this._element.querySelector('.board'));
    }
  }

  drawBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    const score = document.createElement('p');
    score.classList.add('board__score');
    score.textContent = 'Score: 0';
    const lifes = document.createElement('p');
    lifes.classList.add('board__lifes');
    lifes.innerHTML = `Lifes:${drawLifes(5)}`;
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.index = i;
      board.appendChild(cell);
    }
    this._element.appendChild(score);
    this._element.appendChild(lifes);
    this._element.appendChild(board);
  }

  drawGoblin() {
    const cells = Array.from(this._element.querySelector('.board').children);
    const currentCell = this._element.querySelector('.cell_selected');
    let index = 0;
    if (currentCell) {
      index = this.generateRandom(cells, currentCell.dataset.index);
      this.lifesCounter -= 1;
      const lifesLeft = this._element.querySelector('.board__lifes');
      if (this.lifesCounter > 0) {
        lifesLeft.innerHTML = `Lifes:${drawLifes(this.lifesCounter)}`;
      } else {
        lifesLeft.innerHTML = 'No lifes left';
      }
      cells.forEach((cell) => cell.classList.remove('cell_selected'));
    } else {
      index = Math.floor(Math.random() * cells.length);
    }
    cells[index].classList.add('cell_selected');
  }

  reDrawStats() {
    if (this._element.children.length > 0) {
      this.lifesCounter = 5;
      this._element.querySelector('.board__lifes').innerHTML = `Lifes:${drawLifes(5)}`;
      this._element.querySelector('.board__score').textContent = 'Score: 0';
    } else {
      throw new Error('board is not found');
    }
  }
}
