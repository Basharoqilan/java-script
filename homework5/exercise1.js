let x = document.getElementById("mydiv");
let y = document.createTextNode("basharoqilan");
x.onmousemove = function () {
  x.textContent = "can i help you";
};

x.onmouseleave = function () {
  x.textContent = "Hello world";
};
