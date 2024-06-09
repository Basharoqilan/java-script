let x = document.getElementById("font_family");
let s = document.getElementById("font_size");
let t = document.getElementById("font_italic");
let b = document.getElementById("font_bold");
let u = document.getElementById("font_underline");
let y = document.getElementById("text");
let font = ["Arial", "Verdana", "Helvetica", "Times New Roman", "Courier New"];
let size = ["8pt", "10pt", "12pt", "14pt", "16pt"];

x.onclick = function () {
  y.style.fontFamily = x.value;
};

s.onclick = function () {
  y.style.fontSize = s.value;
};

let click1 = false;
t.onclick = function () {
  click1 = !click1;
  if (click1) {
    y.style.fontStyle = "italic";
  } else {
    y.style.fontStyle = "normal";
  }
};

let click2 = false;
b.onclick = function () {
  click2 = !click2;
  if (click2) {
    y.style.fontWeight = "bold";
  } else {
    y.style.fontWeight = "normal";
  }
};

let click3 = false;
u.onclick = function () {
  click3 = !click3;
  if (click3) {
    y.style.textDecoration = "underline";
  } else {
    y.style.textDecoration = "";
  }
};
