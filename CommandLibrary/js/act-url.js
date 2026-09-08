// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;

// Select all btn class elements
        const menuLinks = document.querySelectorAll(".btn-link");

        menuLinks.forEach(link => {
        // loop through buttons
            const linkPath = new URL(link.href).pathname;
        
            // Cleaning up current url for exact match
            if (currentPath === linkPath || (currentPath === "/" && linkPath.endsWith("index.html"))) {
                link.classList.add("is-active");
    }
  });
});