$(document).ready(function() {
    // ✅ Prevent duplicate headers by removing an existing one before loading
    $("#header-container").empty().load("index.html #bringer-header", function() {
        console.log("Header loaded!");

        // ✅ Load necessary scripts **only once**
        if (typeof bringer_config === "undefined") {
            $.getScript("js/5thdt.min.js");
            $.getScript("js/currentYear.js");
            $.getScript("js/themeSwitcher.js");
            
        }
    });
});