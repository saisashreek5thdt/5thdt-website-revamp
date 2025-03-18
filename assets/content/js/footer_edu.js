// Fetch and inject the footer from home.html
fetch("home.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const footer = doc.querySelector("footer");

    if (footer) {
      // Inject the footer into the placeholder
      document.getElementById("footer-placeholder").innerHTML =
        footer.outerHTML;

      // Update the current year
      const currentYearElement = document.getElementById("currentYear");
      if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
      }

      console.log("Footer loaded successfully!");
    } else {
      console.warn("Footer not found in home.html");
    }
  })
  .catch((error) => console.error("Error loading footer:", error));
