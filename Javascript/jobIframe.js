// For Iframe
const buttons = document.querySelectorAll('.read-btn');
const iframe = document.getElementById('jobIframe');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        iframe.src = url;
    });
});

// For Buttons 1 2 3
document.addEventListener("DOMContentLoaded", () => {
  const pageButtons = document.querySelectorAll(".page-button");
  const pages = document.querySelectorAll(".job-page");

  pageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPage = btn.dataset.page;

      pages.forEach(page => {
        if (page.dataset.page === targetPage) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    });
  });
});