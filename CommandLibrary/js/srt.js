// Script to enable the sorting of multiple table headers from the CommandLibrary
const tableSort = (tableId) => {
	const table = document.getElementById(tableId);
	if (!table) {
		console.error(`Table with ID "${tableId}" not found`);
		return;
	}

	const thead = table.querySelector("thead");
	const tbody = table.querySelector("tbody");
	if (!thead || !tbody) {
		console.error("Table must have <thead> and <tbody>");
		return;
	}

	const headers = thead.querySelectorAll("th");
	if (headers.length === 0) {
		console.error("No table headers found");
		return;
	}

	// Initialize sorting direction for each column
	const sortDirections = Array(headers.length).fill("asc");

	const getCellValue = (row, column) => {
		const cell = row.children[column];
		// Handle cases where cell is not found
		if (!cell) return "";
		const cellValue = cell.textContent.trim();
		return isNaN(cellValue) ? cellValue : parseFloat(cellValue);
	};

	const sortTableByColumn = (column, direction) => {
		const rows = Array.from(tbody.querySelectorAll("tr"));
		rows.sort((a, b) => {
			const cellA = getCellValue(a, column);
			const cellB = getCellValue(b, column);
			const order = direction === "asc" ? 1 : -1;
			if (typeof cellA === "number" && typeof cellB === "number") {
				return order * (cellA - cellB);
			} else {
				return order * cellA.toString().localeCompare(cellB);
			}
		});
		rows.forEach((row) => tbody.appendChild(row));
	};

	const handleHeaderClick = (index) => {
		sortTableByColumn(index, sortDirections[index]);
		sortDirections[index] = sortDirections[index] === "asc" ? "desc" : "asc";
		updateHeaderClasses();
	};

	const updateHeaderClasses = () => {
		headers.forEach((header, index) => {
			header.classList.remove("sort-asc", "sort-desc");
			header.classList.add(
				sortDirections[index] === "asc" ? "sort-asc" : "sort-desc",
			);
		});
	};

	// Attach click event listeners to each header cell
	headers.forEach((header, index) => {
		header.addEventListener("click", () => handleHeaderClick(index));
	});
};
// Initialize table sorting once the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	tableSort("commandTable");
});