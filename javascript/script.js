let color = 'black';

// buttons
const colorButton = document.querySelector('.btn-1');

function changeColor() {
  color = colorButton.value;
}

function colorCell() {
  this.style.backgroundColor = color;
}

// grid maker
function makeGrid(size) {
  const gridArea = document.querySelector('.device-body__screen');
  // remove cells before creating new grid
  const createdCell = gridArea.querySelectorAll('div');
  createdCell.forEach((div) => div.remove());
  gridArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // adding cells
  const area = size * size;
  for (let i = 0; i < area; i += 1) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseover', colorCell);
    cell.style.backgroundColor = 'grey';
    gridArea.insertAdjacentElement('beforeend', cell);
  }
}

colorButton.addEventListener('input', changeColor);
