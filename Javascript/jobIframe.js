const buttons = document.querySelectorAll('.read-btn');
const iframe = document.getElementById('jobIframe');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        iframe.src = url;
    });
});