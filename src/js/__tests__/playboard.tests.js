/**
 * @jest-environment jsdom
 */
import Playboard from '../playboard';

test('class Playboard drawBoard() method test', () => {
  const element = document.createElement('div');
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  const cells = element.querySelectorAll('.cell');
  expect(cells.length).toEqual(16);
});

test('class Playboard drawModal() method test', () => {
  const element = document.createElement('div');
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  contentBuilder.drawModal('You won!');
  const btn = element.querySelector('.modal_button');
  const text = element.querySelector('h1');
  expect([btn.textContent, text.textContent]).toEqual(['New Game', 'You won!']);
});

test('class Playboard drawGoblin() method (first Goblin appearance case)  test', () => {
  const element = document.createElement('div');
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  contentBuilder.drawGoblin();
  const cellsWithGoblin = Array.from(element.querySelectorAll('.cell_selected'));
  expect(cellsWithGoblin.length).toEqual(1);
});

test('class Playboard drawGoblin() method (redraw Goblin case) test', () => {
  const element = document.createElement('div');
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  const boardcCells = element.querySelectorAll('.cell');
  boardcCells[0].classList.add('cell_selected');
  let correctBehavior = true;
  for (let i = 0; i < boardcCells.length; i += 1) {
    const currentCellIndex = element.querySelector('.cell_selected').dataset.index;
    contentBuilder.drawGoblin();
    const newCellIndex = element.querySelector('.cell_selected').dataset.index;
    const cellsWithGoblin = Array.from(
      element.querySelectorAll('.cell_selected'),
    );
    if (currentCellIndex === newCellIndex || cellsWithGoblin.length > 1) {
      correctBehavior = false;
    }
  }
  expect(correctBehavior).toBe(true);
});

test('class Playboard reDrawStats() (success case) method test', () => {
  const element = document.createElement('div');
  const contentBuilder = new Playboard(element);
  contentBuilder.drawBoard();
  const score = element.querySelector('.board__score');
  const lifes = element.querySelector('.board__lifes');
  score.innerHTML = '';
  lifes.innerHTML = '';
  contentBuilder.reDrawStats();
  expect([score.textContent, lifes.textContent]).toEqual(['Score: 0', 'Lifes: ❤ ❤ ❤ ❤ ❤']);
});

test('class Playboard reDrawStats() (alert case) method test', () => {
  const element = document.createElement('div');
  const contentBuilder = new Playboard(element);
  function riseError() {
    contentBuilder.reDrawStats();
  }
  expect(riseError).toThrowError('board is not found');
});
