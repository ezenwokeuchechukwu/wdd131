document.addEventListener("DOMContentLoaded", () => {
    const temp = 20; // Celsius
    const windSpeed = 10; // km/h
    const windChillElement = document.getElementById("windchill");
    const currentYearElement = document.getElementById("currentYear");
    const lastModifiedElement = document.getElementById("lastModified");

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

    windChillElement.textContent = calculateWindChill(temp, windSpeed);
    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
});
