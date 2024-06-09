let x = document.getElementById("p1_show");
let y = document.getElementById("p1-hide");
let t = document.getElementById("p1_text");
let x2 = document.getElementById("p2_show");
let y2 = document.getElementById("p2-hide");
let t2 = document.getElementById("p2_text");
let x3 = document.getElementById("p3_show");
let y3 = document.getElementById("p3-hide");
let t3 = document.getElementById("p3_text");
y.onclick = function () {
  t.style.display = "none";
};
x.onclick = function () {
  t.style.display = "block";
};

y2.onclick = function () {
  t2.style.display = "none";
};
x2.onclick = function () {
  t2.style.display = "block";
};

y3.onclick = function () {
  t3.style.display = "none";
};
x3.onclick = function () {
  t3.style.display = "block";
};
