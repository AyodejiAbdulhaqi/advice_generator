const adviceText = document.getElementById("advice");
const counterText = document.getElementById("counter");
const dateTimeText = document.getElementById("datetime");
const button = document.getElementById("getAdvice");

let counter = 0;

// Function to fetch advice
async function fetchAdvice() {
  adviceText.textContent = "Loading advice..."; // Show loading state
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const advice = data.slip.advice;

    // Update advice text
    adviceText.textContent = `"${advice}"`;

    // Update counter
    counter++;
    counterText.textContent = `Advice shown: ${counter}`;

    // Update date & time
    const now = new Date();
    dateTimeText.textContent = `Last updated: ${now.toLocaleString()}`;

  } catch (error) {
    adviceText.textContent = "Failed to fetch advice. Try again!";
  }
}

// Load advice on page load
window.onload = fetchAdvice;

// Fetch new advice when button is clicked
button.addEventListener("click", fetchAdvice);
