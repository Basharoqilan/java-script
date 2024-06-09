let y = document.getElementById("songTextInput");
let x = document.getElementById("addButton");
let z = document.getElementById("playlist");
x.onclick = function () {
  let v = y.value;
  if (v !== "") {
    let l = document.createElement("li");
    l.textContent = v;

    let d = document.createElement("button");
    d.textContent = "delete";

    d.onclick = function () {
      z.removeChild(l);
    };

    l.appendChild(d);
    z.appendChild(l);
    y.value = "";
  }
};
