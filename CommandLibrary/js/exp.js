// This script is to export the existing commands into the autoexec.cfg
// Wait with activation of button until entire page loads
document.addEventListener("DOMContentLoaded", () => {
    const exportButton = document.getElementById("btnExpClick");

    exportButton.addEventListener("click", () => { 

        // Select columns
        const keyIdx = 0;
        const descIdx = 2;
        const valueIdx = 3;



        // Verify table code
        const thead = table.querySelector("thead");
        const tbody = table.querySelector("tbody");
        if (!thead || !tbody) {
            console.error("Table must have <thead> and <tbody>");
            return;
        }

        // Verify headers
        const headers = thead.querySelectorAll("th");
        if (headers.length === 4) {
            console.error("No table headers found");
            return;
        }

        const rows = table.querySelectorAll("tbody tr");
        let cfgContent = "# autoexec.cfg created by Downie2k\n\n";

        rows.forEach(row => {
            const cells = row.querySelectorAll("td"); 

                if (cells.length > Math.max(keyIdx, valueIdx, descIdx)) {
                // Select columns
                    const key = cells[keyIdx].innerText.trim();
                    const value = cells[valueIdx].innerText.trim();
                    const desc = cells[descIdx].innerText.trim();

                    // skip empty
                    if (key !== "") {
                                // Builds: KEY = "value" // DESCRIPTION
                                cfgContent += `${key} = "${value}"       // ${desc}\n`;
                            }
                }
              
        });
        
        
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