let emptyX = 3;
let emptyY = 3;

// Цвет ячейки

function moveToEmptyPlace(cell) {
  const newX = emptyX;
  const newY = emptyY;

  emptyX = cell.x;
  emptyY = cell.y;

  cell.x = newX;
  cell.y = newY;

  cell.style.left = `${newX * 25}%`;
  cell.style.top = `${newY * 25}%`;
}

let cells = [...document.querySelectorAll(".cell")];
cells.sort(() => Math.random() - 0.5);

let x = 0;
let y = 0;

for (let cell of cells) {
  cell.x = x;
  cell.y = y;
  moveToEmptyPlace(cell);

  x += 1;

  if (x > 3) {
    y += 1;
    x = 0;
  }

  cell.onclick = () => {
    let dX = Math.abs(cell.x - emptyX);
    let dY = Math.abs(cell.y - emptyY);
    let distance = dX + dY;

    if (distance < 2) {
      moveToEmptyPlace(cell);
    }
  };
}

// Моя практика/////////////////
const colors = ["red", "yellow", "green", "blue"];
let cellsColor = [...document.querySelectorAll(".cell")];

console.log(colors);

cellsColor.forEach((cell, colors) => {
  const randomColor = colors[Math.round(Math.random() * colors.length)];
  cell.style.background = `${randomColor}`;
});
