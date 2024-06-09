let x = document.querySelector("[name ='password1']");
let y = document.querySelector("[name ='password2']");
let text1 = document.getElementById("pw1_check");
let d_1 = document.createTextNode("Too short");
let text2 = document.getElementById("pw2_check");
let d_2 = document.createTextNode("the two passwords dont match");
onsubmit = function (e) {
  if (x.value !== "" && x.value.length >= 6) {
  } else {
    text1.appendChild(d_1);
    e.preventDefault();
  }

  if (y.value !== "" && y.value === x.value) {
  } else {
    text2.appendChild(d_2);
    e.preventDefault();
  }
};
