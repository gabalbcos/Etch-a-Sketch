let color = 'black';
//buttons
const btnPickColor = document.querySelector('.btn-1');
const btnClear = document.querySelector('.btn-2');
const colorButton = document.querySelector('.btn-1');

//grid maker
function makeGrid(size){
let gridArea = document.querySelector('.device-body__screen');
let cell = gridArea.querySelectorAll('div')
cell.forEach((div) => div.remove());
gridArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
gridArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//adding cells
let area = size * size;
for(let i = 0; i < area; i++){
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', colorCell);
    cell.style.backgroundColor = 'grey';
    gridArea.insertAdjacentElement('beforeend', cell)
 }
}

colorButton.addEventListener("input", changeColor);
 

function colorCell(){
    this.style.backgroundColor = color;  
}

function changeColor(){
    color = colorButton.value;
    console.log(colorButton.value)
}
