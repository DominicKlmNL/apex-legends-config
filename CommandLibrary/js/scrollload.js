// Quickload

window.addEventListener('scroll', () => {
    countScroll();
});

function countScroll() {
    const table = document.getElementById("commandTable");
    const iconCountDisplay = document.getElementById("iconCount");

    if (!table || !iconCountDisplay) {
        return;
    }

    const rows = table.querySelectorAll("tr").length;
    iconCountDisplay.textContent = String(rows);
}