// Highlight active menu item
$(document).ready(function () {
  const currentPath = window.location.pathname.split("/").pop();

  // Highlight main menu items
  $(".main-menu li a").each(function () {
    const itemPath = $(this).attr("href");
    if (
      itemPath === currentPath ||
      (currentPath === "" && ["home.html", "about.html"].includes(itemPath))
    ) {
      $(this).parent().addClass("current-menu-parent active");
    } else {
      $(this).parent().removeClass("current-menu-parent active");
    }
  });

  // Highlight sub-menu items
  $(".sub-menu li a").each(function () {
    const itemPath = $(this).attr("href");
    if (
      itemPath === currentPath ||
      (currentPath === "" &&
        [
          "animation.html",
          "creative.html",
          "education.html",
          "illustrations.html",
          "software.html",
        ].includes(itemPath))
    ) {
      $(this).parent().addClass("current-menu-parent active");
      $(this).closest(".sub-menu").parent().addClass("current-menu-parent open"); // Ensure parent is open
    } else {
      $(this).parent().removeClass("current-menu-parent active");
    }
  });

  // Load header dynamically and prevent duplicates
  const $headerContainer = $("#header-container");
  if ($headerContainer.length && !$headerContainer.children().length) {
    $headerContainer.load("home.html #bringer-header", function () {
      console.log("Header loaded!");
      if (typeof bringer_config === "undefined") {
        $.getScript("assets/content/js/5thdt.min.js");
      }
    });
  }
});
