document.addEventListener("DOMContentLoaded", function () {
    const rowsPerPage = 10;
    const table = document.getElementById("permitTable");
    const tbody = document.getElementById("tableBody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    const paginationButtons = document.querySelectorAll(".page-button");
    const nextButton = document.querySelector(".page-button.next");

    let currentPage = 1;

    function showPage(page) {
        // Hide all rows
        rows.forEach(row => row.style.display = "none");

        // Show rows for the current page
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.slice(start, end).forEach(row => row.style.display = "");

        // Update active button style (optional)
        paginationButtons.forEach(btn => btn.classList.remove("active"));
        paginationButtons[page - 1]?.classList.add("active");

        currentPage = page;
    }

    // Add click listeners to page number buttons
    paginationButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showPage(index + 1);
        });
    });

    // Handle "Next" button
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (currentPage < totalPages) {
                showPage(currentPage + 1);
            }
        });
    }

    // Initialize table with first page
    showPage(1);
});
