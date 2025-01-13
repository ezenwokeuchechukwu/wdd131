const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});
// Dynamically update footer with current year and last modified date
document.addEventListener("DOMContentLoaded", () => {
    // Update the year
    const currentYearElement = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    // Update the last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
});
