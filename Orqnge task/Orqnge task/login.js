function loginClick(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password1").value;

  var storedemail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password1");
  var storeduser = localStorage.getItem("username");

  if (email === storedemail && password === storedPassword) {
    sessionStorage.setItem("storedemail", email);
    sessionStorage.setItem("storedPassword", password);
    sessionStorage.setItem("storeduser", storeduser);

    alert("You have successfully logged in!");
    window.location.href = "text2.html";
  } else {
    alert("Incorrect username or password.");
  }
}
