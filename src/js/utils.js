export default function drawLifes(lifesLeft) {
  let lifes = '';
  for (let i = 0; i < lifesLeft; i += 1) {
    lifes += ' \u{2764}';
  }

  return `<span style='color: red'>${String(lifes)}</span>`;
}
