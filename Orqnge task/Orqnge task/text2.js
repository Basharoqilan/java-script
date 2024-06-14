document.addEventListener("DOMContentLoaded", function () {
  var x = sessionStorage.getItem("storeduser");
  var Logout = document.getElementById("Logout");
  if (x) {
    document.getElementById("x").textContent = x;
    Logout.style.display = "block";
  } else {
    Logout.style.display = "none";
  }
});

function handleLogoutClick() {
  var x = sessionStorage.getItem("storeduser");
  if (x) {
    sessionStorage.clear();
    window.location.href = "login.html";
  }
}
