const board = document.getElementById("board");
const countOfSquares = 2000;
const colors = ["#f70a1a", "#f70ae0", "#900af7", "#1e0af7", "#0accf7", "#0af7a0", "#0af722", "#f8fc05", "#fc7d05"];

for (let i = 0; i < countOfSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  board.append(square);
  square.addEventListener("mouseover", ()=>setColor(square))
  square.addEventListener("mouseleave", ()=>removeColor(square))
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000"
}

function getRandomColor() {
  const index = Math.floor(Math.random()*colors.length);
  return colors[index]
}
