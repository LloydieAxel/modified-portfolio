/* =========================================================
   INTERACTIVE STUDENT PROFILE - JAVASCRIPT FEATURES
   ========================================================= */

// Run everything once the page has fully loaded
window.addEventListener("DOMContentLoaded", () => {
  showWelcomeMessage();   // 1. Welcome message using prompt()
  displayCurrentDate();   // 2. Current date
  updateClock();          // 3. Live digital clock (first run)
  setInterval(updateClock, 1000); // keep clock ticking every second
  showRandomQuote();      // Homework: random motivational quote
});

/* ============ 1. Welcome Message (prompt) ============ */
function showWelcomeMessage() {
  let userName = prompt("Please enter your name:");

  if (userName && userName.trim() !== "") {
    alert("Welcome " + userName.trim() + "!");
  } else {
    alert("Welcome Guest!");
  }
}

/* ============ 2. Current Date ============ */
function displayCurrentDate() {
  const dateElement = document.getElementById("current-date");
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = "Today is " + today.toLocaleDateString("en-US", options);
}

/* ============ 3. Live Digital Clock ============ */
function updateClock() {
  const clockElement = document.getElementById("live-clock");
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should display as 12

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockElement.textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
}

/* ============ 4. Theme Changer (Light / Dark Mode) ============ */
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const themeBtn = document.getElementById("theme-toggle-btn");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
}

/* ============ 5. Contact Form Validation ============ */
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before submitting!");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address!");
    return false;
  }

  alert("✅ Thank you, " + name + "! Your message has been sent successfully.");
  document.getElementById("contact-form").reset();
  return false; // keep on page instead of reloading (action="#")
}

/* ============ 6. Button Click Counter ============ */
let clickCount = 0;
function incrementCounter() {
  clickCount++;
  const counterDisplay = document.getElementById("click-counter-display");
  const timesWord = clickCount === 1 ? "time" : "times";
  counterDisplay.textContent = "Button clicked " + clickCount + " " + timesWord;
}

/* ============ Homework: Show/Hide About Me Section ============ */
function toggleAbout() {
  const aboutText = document.getElementById("about-text");
  const toggleBtn = document.getElementById("about-toggle-btn");

  if (aboutText.style.display === "none") {
    aboutText.style.display = "block";
    toggleBtn.textContent = "Hide About Me";
  } else {
    aboutText.style.display = "none";
    toggleBtn.textContent = "Show About Me";
  }
}

/* ============ Homework: Random Motivational Quote on Load ============ */
function showRandomQuote() {
  const quotes = [
    "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "First, solve the problem. Then, write the code. — John Johnson",
    "Experience is the name everyone gives to their mistakes. — Oscar Wilde",
    "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie",
    "Simplicity is the soul of efficiency. — Austin Freeman",
    "Programs must be written for people to read. — Harold Abelson",
    "Push yourself, because no one else is going to do it for you.",
    "Small daily improvements lead to stunning results."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote-display");
  quoteElement.textContent = quotes[randomIndex];
}