
function handleLogOut () {
    localStorage.removeItem("loggedIn");
    window.location.href = "/pages/sign-in.html";
}

document.querySelector(".sign-out-btn").addEventListener("click", handleLogOut)
