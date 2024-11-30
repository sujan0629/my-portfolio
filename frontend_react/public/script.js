let counter = 0;
let countdownComplete = false;
let pageLoaded = false;

const countdownInterval = setInterval(() => {
    // Update the text content of the h2 element with percentage
    document.querySelector(".preloader .countdown").textContent = counter + "%";
    // Increment the counter
    counter++;
    // If counter reaches 100, stop the interval
    if (counter > 100) {
        clearInterval(countdownInterval);
        countdownComplete = true;
        checkIfReadyToHidePreloader();
    }
}, 50); // Adjust interval time (in milliseconds) as needed

window.addEventListener('load', function() {
    pageLoaded = true;
    checkIfReadyToHidePreloader();
});

function checkIfReadyToHidePreloader() {
    if (countdownComplete && pageLoaded) {
        document.getElementById("preloader").style.display = "none";
    }
}
