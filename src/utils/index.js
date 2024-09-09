export function handleLogOut () {
    localStorage.removeItem("loggedIn");
    window.location.href = "/pages/sign-in.html";
}