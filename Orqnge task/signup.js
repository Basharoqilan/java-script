function checkDone() {
  let signupbottun = document.querySelector("#signup");
  let emailinp = document.querySelector("#email");
  let phoneinp = document.querySelector("#mobile");
  let passinp = document.querySelector("#password1");
  let chagree = document.querySelector("#chAgree");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  const phonePattern = /^077\d{7}$/;

  if (
    emailPattern.test(emailinp.value) &&
    phonePattern.test(phoneinp.value) &&
    passwordPattern.test(passinp.value) &&
    chagree.checked
  ) {
    console.log("good");
    document.querySelector("#alert1").style.display = "none";
    document.querySelector("#alert2").style.display = "none";
    document.querySelector("#alert3").style.display = "none";
    signupbottun.removeAttribute("disabled");
  } else {
    if (!emailPattern.test(emailinp.value)) {
      document.querySelector("#alert1").style.display = "block";
    } else {
      document.querySelector("#alert1").style.display = "none";
    }
    if (!phonePattern.test(phoneinp.value)) {
      document.querySelector("#alert2").style.display = "block";
    } else {
      document.querySelector("#alert2").style.display = "none";
    }
    if (!passwordPattern.test(passinp.value)) {
      document.querySelector("#alert3").style.display = "block";
    } else {
      document.querySelector("#alert3").style.display = "none";
    }
    signupbottun.setAttribute("disabled", "true");
  }
}

document.querySelector("#signup").addEventListener("click", function () {
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#mobile").value;
  let password = document.querySelector("#password1").value;

  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("password", password);

  alert("Account created successfully!");

  window.location.href = "login.html";
});
