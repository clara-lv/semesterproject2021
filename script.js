function fill() {
  var color = document.getElementById("colorPicker")
  .value;
  this.style.backgroundColor = color;
  line.style.backgroundColor = color;
}
function white(){
  this.style.backgroundColor="white"
}

for (i=0; i<36; i++) {
  var cell = document.createElement("div");
  cell.className = "cell";
  cell.addEventListener("mousedown", fill);
  cell.addEventListener("mouseover", white);
  document.getElementById("grid").appendChild(cell);
}
for (i=0;i<4; i++) {
   var line = document.createElement("div");
   line.className = "bar";
   document.getElementById("bar").appendChild(line);
}