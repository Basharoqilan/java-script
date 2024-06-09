let F = document.getElementById("Flags");
let y = document.getElementById("y");

function updateImage(s) {
  let i;
  switch (s) {
    case "Jordan":
      i = "1.jpg";
      break;
    case "Palestine":
      i = "2.png";
      break;
    case "Sudan":
      i = "4.png";
      break;
    case "Iraq":
      i = "5.png";
      break;
    default:
      i = "";
  }

  y.innerHTML = "";

  if (i) {
    let img = document.createElement("img");
    img.src = i;
    y.appendChild(img);
  }
}

F.onchange = function () {
  updateImage(F.value);
};

document.addEventListener("DOMContentLoaded", function () {
  updateImage(F.value);
});
