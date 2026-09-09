// Retrieve DB collection
document.addEventListener("DOMContentLoaded", () => {
    const countComms = document.getElementById("mainCon");

    countComms.addEventListener("load", () => {
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
        var count = table.querySelectorAll("tbody tr").rows.length;

        document.getElementById("scrollCount").innerHTML = count;
    });
});

