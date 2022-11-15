function toggleTheme() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}
let buttonVariable = document.getElementById("toggleButton")
buttonVariable.onclick = toggleTheme;