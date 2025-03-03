const themeToggle = document.getElementById("theme-toggle");
const themeStyle = document.getElementById("theme-style");

themeToggle.addEventListener("click", () => {
  if (themeStyle.getAttribute("href") === "assets/content/css/light.min.css") {
    themeStyle.setAttribute("href", "assets/content/css/dark.min.css");
  } else {
    themeStyle.setAttribute("href", "assets/content/css/light.min.css");
  }
});
