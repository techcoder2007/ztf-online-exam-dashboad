"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const verify = localStorage.getItem("loggedIn");

  if (!verify) {
    window.location.href = "/pages/sign-in.html";
  } else {
  }
});
