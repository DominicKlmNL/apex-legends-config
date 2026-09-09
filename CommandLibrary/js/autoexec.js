// This script is to export the existing commands into the autoexec.cfg
// Wait with activation of button until entire page loads
document.addEventListener("DOMContentLoaded", () => {
	const exportButton = document.getElementById("btnExpClick");


	exportButton.addEventListener("click", () => {
			
		// Select columns
		const keyIdx = 0;
		const descIdx = 1;
		const valueIdx = 3;
		const catIdx = 5;

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
		const rows = table.querySelectorAll("tbody tr");
		let cfgContent = "\n ==== Powered by the Command Library ====	\n # This autoexec.cfg has been created by Downie2k\n\n # Please make sure to check for updates, because it changes regularly. \n\n";
		// Set category to empty string to avoid duplicate category comments in the autoexec.cfg
		const lastCategory = new Set();

		// Start row validation
		rows.forEach((row) => {
			const cells = row.querySelectorAll("td");
			// Check for categories first and if the name is unique write it as comment

			if (cells.length > Math.max(catIdx, keyIdx)) {
				const cat = cells[catIdx].innerText.trim();
				if (cat !== "" && !lastCategory.has(cat)) {
					// BUILDS: cfgContent & lastCategory
					cfgContent += `\n// ====== Configuration for category ${cat} ====== \n`;
					lastCategory.add(cat);
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
					// Builds: KEY "value" // DESCRIPTION
					cfgContent += `${key} \u00A0 "${value}" \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 // ${desc}\n`;
			}}
		});

		// Adding a final line to the autoexec as signature of my service
		cfgContent += `\n\n # ==== End of configuration ==== \n # The autoexec has been completed\n # Thank you for using Downie2k's configuration files\n  ==== Powered by the Command Library 2026 ==== \n`;

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

	});
});