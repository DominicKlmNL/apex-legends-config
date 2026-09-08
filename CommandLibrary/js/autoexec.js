// This script is to export the existing commands into the autoexec.cfg
// Wait with activation of button until entire page loads
// Listen to each click event
document.addEventListener("DOMContentLoaded", () => {
	const exportButton = document.getElementById("btnExpClick2");

	exportButton.addEventListener("click", (event) => {
		if (event.target && event.target.id === "btnExpClick2") {
			// Select columns
			const keyIdx = 0;
			const descIdx = 2;
			const valueIdx = 3;
			const catIdx = 6;

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
			if (headers.length === 8) {
				console.error("No table headers found");
				return;
			}

			// Select rows and start file
			const rows = table.querySelectorAll("tbody tr");
			let cfgContent = "# This autoexec.cfg has been created by Downie2k\n\n";

			// Start row validation
			rows.forEach((row) => {
				const cells = row.querySelectorAll("td");
				// Check for categories first and if the name is unique write it as comment
				if (cells[catIdx]) {
					const catName = cells[catIdx].innerText.trim();
					if (catName !== "") {
						cfgContent += `\n // Settings for category ${catName}\n`;
					}
				}
				// after checking category the regular values and description can be added
				if (cells.length > Math.max(keyIdx, valueIdx, descIdx)) {
					// Select columns
					const key = cells[keyIdx].innerText.trim();
					const value = cells[valueIdx].innerText.trim();
					const desc = cells[descIdx].innerText.trim();

					// skip empty
					if (key !== "") {
						// Builds: KEY = "value" // DESCRIPTION
						cfgContent += `${key} = "${value}"                           // ${desc}\n`;
					}
				}
			});

			// Adding a final line to the autoexec as signature of my service
			cfgContent += `# the autoexec has been completed\nThank you for using Downie2k's configuration filesn\n`;

			// Generating autoexec.cfg
			const blob = new Blob([cfgContent], { type: "text/plain;charset=utf-8" });
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);

			// Predetermined filename
			link.download = "autoexec.cfg";
			link.style.display = "none";

			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	});
});
// Initialize table sorting once the document is fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
	if (event.target && event.target.id === "btnExpClick2");
});
