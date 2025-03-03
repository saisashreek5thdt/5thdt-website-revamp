fetch("about.html") // Index.html ko fetch karo
        .then(response => response.text()) // Response ko text me convert karo
        .then(data => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, "text/html"); // HTML parse karo
            let footer = doc.querySelector("footer"); // Footer select karo
            if (footer) {
                document.getElementById("footer-placeholder").innerHTML = footer.outerHTML; // Footer inject karo
                console.log("Footer loaded successfully!");
            }
        })
        .catch(error => console.error("Error loading footer:", error));