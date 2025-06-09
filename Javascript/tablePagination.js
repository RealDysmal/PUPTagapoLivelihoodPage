const rowsPerPage = 10;
    const tbody = document.getElementById("tableBody");
    const pagination = document.getElementById("pagination");

    const rows = Array.from(tbody.querySelectorAll("tr"));
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    function displayPage(page) {
        tbody.innerHTML = ""; // Clear existing rows
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const pageRows = rows.slice(start, end);
        pageRows.forEach(row => tbody.appendChild(row));

        // Highlight active button
        document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.page-btn[data-page="${page}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    function setupPagination() {
        pagination.innerHTML = ""; // Clear existing pagination
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.classList.add("page-btn");
            btn.setAttribute("data-page", i);
            btn.addEventListener("click", () => displayPage(i));
            pagination.appendChild(btn);
        }
    }

    setupPagination();
    displayPage(1);