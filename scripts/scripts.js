document.addEventListener("DOMContentLoaded", () => {
    // Static values for temperature and wind speed
    const temp = 20; // Celsius
    const windSpeed = 10; // km/h

    // Select elements to display values
    const windChillElement = document.getElementById("windchill");
    const currentYearElement = document.getElementById("currentYear");
    const lastModifiedElement = document.getElementById("lastModified");

    // Function to calculate wind chill factor
    const calculateWindChill = (temp, speed) => {
        if (temp <= 10 && speed > 4.8) {
            return (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(speed, 0.16) +
                0.3965 * temp * Math.pow(speed, 0.16)
            ).toFixed(2);
        }
        return "N/A";
    };

    // Update elements with calculated values
    windChillElement.textContent = calculateWindChill(temp, windSpeed);
    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
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
document.addEventListener("DOMContentLoaded", () => {
    // Static values for temperature and wind speed
    const temp = 20; // Celsius
    const windSpeed = 10; // km/h

    // Select elements to display values
    const windChillElement = document.getElementById("windchill");
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");

    // Function to calculate wind chill factor
    const calculateWindChill = (temp, speed) => {
        if (temp <= 10 && speed > 4.8) {
            return (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(speed, 0.16) +
                0.3965 * temp * Math.pow(speed, 0.16)
            ).toFixed(2);
        }
        return "N/A";
    };

    // Update elements with calculated values
    windChillElement.textContent = calculateWindChill(temp, windSpeed);
    currentYearElement.textContent = new Date().getFullYear();

    // Get and format the current date and time for the last modified display
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Updated: ${lastModifiedDate.toLocaleString()}`;
});

