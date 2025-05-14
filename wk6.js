<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Fun Zone</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <h1>🎉 Welcome to the Interactive Fun Zone 🎉</h1>

  <!-- Button Interaction -->
  <button id="magicButton">Click Me!</button>

  <!-- Image Slideshow -->
  <div class="slideshow">
    <img id="galleryImage" src="image1.jpg" alt="Slideshow Image" />
  </div>

  <!-- Tabbed Content -->
  <div class="tabs">
    <button class="tab-btn active" data-tab="1">Tab 1</button>
    <button class="tab-btn" data-tab="2">Tab 2</button>
    <div class="tab-content active" id="tab1">This is Tab 1 content.</div>
    <div class="tab-content" id="tab2">This is Tab 2 content.</div>
  </div>

  <!-- Form with Validation -->
  <form id="signupForm">
    <input type="text" id="username" placeholder="Username" required />
    <input type="email" id="email" placeholder="Email" required />
    <input type="password" id="password" placeholder="Password (min 8 chars)" required />
    <button type="submit">Sign Up</button>
    <p id="feedback"></p>
  </form>

  <script src="script.js"></script>
</body>
</html>


// css structure

body {
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;
  background: #f0f8ff;
}

button {
  padding: 1rem;
  margin: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.slideshow img {
  width: 300px;
  height: auto;
  margin: 1rem;
  border-radius: 8px;
  transition: transform 0.5s ease;
}

.tabs .tab-content {
  display: none;
  margin-top: 1rem;
}

.tabs .tab-content.active {
  display: block;
}

.tabs .tab-btn.active {
  background-color: #2196f3;
  color: white;
}

#feedback {
  color: red;
  margin-top: 0.5rem;
}

// javascrirpt structure

// 1. Button Events
const button = document.getElementById("magicButton");
button.addEventListener("click", () => {
  button.textContent = "You clicked me!";
  button.style.backgroundColor = "#673ab7";
});

button.addEventListener("dblclick", () => {
  alert("🎉 Secret double-click action unlocked!");
});

// 2. Keypress Detection
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 3. Slideshow
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let current = 0;
const galleryImage = document.getElementById("galleryImage");

setInterval(() => {
  current = (current + 1) % images.length;
  galleryImage.src = images[current];
  galleryImage.style.transform = "scale(1.05)";
  setTimeout(() => galleryImage.style.transform = "scale(1)", 300);
}, 3000);

// 4. Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(`tab${btn.dataset.tab}`).classList.add("active");
  })
);

// 5. Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("feedback");
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    feedback.textContent = "Invalid email format.";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
    form.reset();
  }
});
