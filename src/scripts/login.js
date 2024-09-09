import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import { adminPasswords } from "../data/login-schema.json";
import { wait } from "../utils/wait";

const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginForm.addEventListener("submit", function (event) {
  event?.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please enter both email and password");
    return;
  }

  if (
    adminPasswords.items.password !== password ||
    adminPasswords.items.email !== email
  ) {
    Toastify({
      text: "Invalid email or password",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, red, crimson)",
      stopOnFocus: true,
    }).showToast();
    emailInput.style.border = "1px solid red";
    email.style.color = "red";
    passwordInput.style.border = "1px solid red";
    passwordInput.style.color = "red";
    return;
  } else {
    localStorage.setItem("loggedIn", "true");

    Toastify({
      text: "Welcome to dashboard",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true,
    }).showToast();

    loginBtn.disabled = true;
    loginBtn.style.opacity = "0.5";

    wait(2000).then(() => {
      window.location.href = "/";
    });
  }
});
