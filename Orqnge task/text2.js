document.addEventListener("DOMContentLoaded", function () {
  var x = localStorage.getItem("username");
  document.getElementById("x").textContent = x;
});
