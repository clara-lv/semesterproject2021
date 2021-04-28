var currentColor = "black"
function onClick() {
  event.srcElement.style.backgroundColor = currentColor
}
function colorButtonClick(color) {
  currentColor = color
}

let div = document.getElementById("main-div")
let gridDiv = document.createElement("div")
gridDiv.classList.add("grid-container")
for (let step = 0; step < 36; step++) {
  let item = document.createElement("div")
  item.classList.add("items")
  item.addEventListener('click', onClick)
  gridDiv.appendChild(item)
}

div.appendChild(gridDiv)