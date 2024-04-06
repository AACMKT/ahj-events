export default class GamePlay {
  constructor(element) {
    this._element = element;
    this._regEx = new RegExp('\u{2764}');
    this.scoreCounter = 0;
    this.onMouseClick = this.onMouseClick.bind(this);
    this.gameStatus = this.gameStatus.bind(this);
    this._element.addEventListener('click', this.onMouseClick);
    this._element.addEventListener('click', this.gameStatus);
  }

  onMouseClick(e) {
    const score = this._element.querySelector('.board__score');
    if (e.target.classList.contains('cell')) {
      if (e.target.classList.contains('cell_selected')) {
        this.scoreCounter += 1;
        e.target.classList.remove('cell_selected');
        score.textContent = `Score: ${this.scoreCounter}`;
      }
    }
  }

  gameStatus() {
    const lifes = this._element.querySelector('.board__lifes').innerHTML;
    const lifesLeft = this._regEx.test(lifes);
    if (!lifesLeft || this.scoreCounter === 5) {
      return false;
    }
    return true;
  }

  modalMessage() {
    let message = '';
    if (this.scoreCounter >= 5) {
      message = 'You won!';
    } else {
      message = 'Game over';
    }
    this.scoreCounter = 0;

    return message;
  }
}
