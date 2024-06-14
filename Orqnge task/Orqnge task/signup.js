function checkDone() {
  let signupButton = document.querySelector("#signup");
  let emailInput = document.querySelector("#email");
  let phoneInput = document.querySelector("#mobile");
  let passInput = document.querySelector("#password1");
  let chAgree = document.querySelector("#chAgree");
  let user = document.querySelector("#username");
  let passInput2 = document.querySelector("#password2");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  const phonePattern = /^077\d{7}$/;
  const userPattern = /^[a-zA-Z0-9]+[a-zA-Z0-9]*$/;

  if (
    userPattern.test(user.value) &&
    emailPattern.test(emailInput.value) &&
    phonePattern.test(phoneInput.value) &&
    passwordPattern.test(passInput.value) &&
    passInput.value === passInput2.value &&
    chAgree.checked
  ) {
    console.log("good");
    document.querySelector("#alert0").style.display = "none";
    document.querySelector("#alert1").style.display = "none";
    document.querySelector("#alert2").style.display = "none";
    document.querySelector("#alert3").style.display = "none";
    document.querySelector("#alert4").style.display = "none";
    signupButton.removeAttribute("disabled");
  } else {
    if (!userPattern.test(user.value)) {
      document.querySelector("#alert0").style.display = "block";
    } else {
      document.querySelector("#alert0").style.display = "none";
    }
    if (!emailPattern.test(emailInput.value)) {
      document.querySelector("#alert1").style.display = "block";
    } else {
      document.querySelector("#alert1").style.display = "none";
    }
    if (!phonePattern.test(phoneInput.value)) {
      document.querySelector("#alert2").style.display = "block";
    } else {
      document.querySelector("#alert2").style.display = "none";
    }
    if (!passwordPattern.test(passInput.value)) {
      document.querySelector("#alert3").style.display = "block";
    } else {
      document.querySelector("#alert3").style.display = "none";
    }
    if (passInput.value !== passInput2.value) {
      document.querySelector("#alert4").style.display = "block";
    } else {
      document.querySelector("#alert4").style.display = "none";
    }
    signupButton.setAttribute("disabled", "true");
  }
}

document.querySelector("#signup").addEventListener("click", function () {
  let email = document.querySelector("#email").value;
  let user = document.querySelector("#username").value;
  let password2 = document.querySelector("#password2").value;
  let phone = document.querySelector("#mobile").value;
  let password = document.querySelector("#password1").value;

  localStorage.setItem("username", user);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("password1", password);
  localStorage.setItem("password2", password2);

  alert("Account created successfully!");

  window.location.href = "login.html";
});
