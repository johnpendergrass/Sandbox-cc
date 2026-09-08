// Sandbox-cc placeholder script.
// Shows the page load time so it is obvious on the phone that the script
// actually ran. Kept trivial on purpose; the game will replace this.

function showLoadTime() {
  const span = document.getElementById("load-time");
  span.textContent = new Date().toLocaleTimeString();
}

showLoadTime();
