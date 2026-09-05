// Script to handle the search bar for the table data from the CommandLibrary; both the general as the removal table data
(() => {
	// Cache DOM elements to avoid re-querying
	const input = document.getElementById("commandInput");
	const table = document.getElementById("commandTable");
	const rows = table.querySelectorAll("tr");
	const search_clear = document.getElementById("clear-icon");

	const searchTable = () => {
		// Convert input to lowercase
		const filter = input.value.toLowerCase().trim();
		// show hide input clear icon
		search_clear.style.display = filter.length > 0 ? "flex" : "none";
		rows.forEach((row, index) => {
			// Skip header row
			if (index === 0) return;
			// Flag to determine if the row should be displayed
			let row_found = false;
			// Get all cells in the current row
			const cells = row.querySelectorAll("td");
			// Loop through each cell in the current row
			for (let cell of cells) {
				// Check if the cell's text content matches the filter
				if (cell.textContent.toLowerCase().includes(filter)) {
					row_found = true;
					// Stop searching through cells once a match is found
					break;
				}
			}
			row.style.display = row_found ? "" : "none";
		});
	};

	// usage

	// for large table search you can use Debounce function
	// Debounce the search function to improve performance
	const debounce = (fn, delay) => {
		let timeoutId;
		return (...args) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => fn(...args), delay);
		};
	};

	const debouncedSearch = debounce(searchTable, 200);

	// Add event listener to the input element
	input.addEventListener("input", debouncedSearch);

	// hide clear icon event
	search_clear.addEventListener("click", () => {
		input.value = "";
		search_clear.style.display = "none";
		searchTable();
	});
})();
