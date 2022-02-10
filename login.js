const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", function () {
  if (emailInput.value == "baper@bank.com" && passwordInput.value == "secret") {
    window.location.href = "banking.html";
  } else {
    console.log("pass not matched");
  }
});
