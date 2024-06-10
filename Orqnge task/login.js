function validateLogin() {
  let emailInput = document.querySelector("#email");
  let passwordInput = document.querySelector("#password");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput.value)) {
    document.querySelector("#alert1").style.display = "block";
    return false;
  } else {
    document.querySelector("#alert1").style.display = "none";
  }

  if (passwordInput.value.length < 8) {
    document.querySelector("#alert2").style.display = "block";
    return false;
  } else {
    document.querySelector("#alert2").style.display = "none";
  }

  let storedEmail = sessionStorage.getItem("email");
  let storedPassword = sessionStorage.getItem("password");

  if (
    emailInput.value === storedEmail &&
    passwordInput.value === storedPassword
  ) {
    alert("valid");
    window.location.href = "text2.html";
  } else {
    alert("not valid");
  }
}

document.querySelector("#login").addEventListener("click", function (event) {
  event.preventDefault();
  validateLogin();
});
