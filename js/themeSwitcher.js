const themeToggle = document.getElementById("theme-toggle");
const themeStyle = document.getElementById("theme-style");

themeToggle.addEventListener("click", () => {
  if (themeStyle.getAttribute("href") === "css/light.min.css") {
    themeStyle.setAttribute("href", "css/dark.min.css");
  } else {
    themeStyle.setAttribute("href", "css/light.min.css");
  }
});
