document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("reading-time");
    const startTime = Date.now();
    function updateReadingTime() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timer.textContent = `Reading time: ${minutes}m ${seconds}s`;
    }
    updateReadingTime();
    setInterval(updateReadingTime, 1000);
});
