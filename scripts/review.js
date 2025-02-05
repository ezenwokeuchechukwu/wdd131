document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("review-counter").textContent = reviewCount;
});
