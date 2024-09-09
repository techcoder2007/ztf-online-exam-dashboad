import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import { adminPasswords } from "../data/login-schema.json";
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

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
    alert("Invalid email or password");
    return;
  }

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

  window.location.href = "/";
});
