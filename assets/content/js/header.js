// Highlight active menu item
$(document).ready(function () {
  const currentPath = window.location.pathname.split("/").pop();

  $(".main-menu li a").each(function () {
    const itemPath = $(this).attr("href");

    if (
      itemPath === currentPath ||
      (currentPath === "" &&
        ["home.html","about.html", "animation.html", "creative.html", 
        "education.html", "illustrations.html", 
        "software.html"].includes(itemPath))
    ) {
      $(this).parent().addClass("current-menu-parent");
    } else {
      $(this).parent().removeClass("current-menu-parent");
    }
  });
});