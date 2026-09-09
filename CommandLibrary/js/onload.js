// Retrieve DB collection
// New
window.addEventListener('load', () => {
    countComms();
});

function countComms() {
    // Verify table
    const table = document.getElementById("commandTable");
    if (!table) {
        console.error(`Table with ID "${"commandTable"}" not found`);
        return;
    }

    // Verify table code
    const thead = table.querySelector("thead");
    const tbody = table.querySelector("tbody");
    if (!thead || !tbody) {
        console.error("Table must have <thead> and <tbody>");
        return;
    }

    // Verify headers
    const headers = thead.querySelectorAll("th");
    if (headers.length === 0) {
        console.error("No table headers found");
        return;
    }

    // Select rows and start file
    const rows = table.querySelectorAll("tr");
    const count = rows.length;

    const ps = document.createElement("p");
    ps.textContent = count;

    const scrollCountElem = document.getElementById("scrollCount");
        if (scrollCountElem) {
            scrollCountElem.textContent = count;
        }

    document.getElementById("scrollCount").ariaValueText;
    console.log(scrollCountElem.textContent); 
}