let x = document.getElementById("mydiv");
let array = ["red", "green", "black", "yellow", "white"];
let y = 0;
x.onclick = function () {
  x.style.backgroundColor = array[y];
  y = (y + 1) % array.length;
};
