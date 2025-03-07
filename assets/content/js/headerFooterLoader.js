$(document).ready(function() {
    // Load Header
    $("#header-container").load("header.html", function() {
      console.log("Header loaded!");
    });

    // Load Footer
    $("#footer-placeholder").load("footer.html", function() {
      console.log("Footer loaded!");
    });
  });