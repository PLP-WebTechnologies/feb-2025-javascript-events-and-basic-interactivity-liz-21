// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.classList.add("hovered"));
hoverBox.addEventListener("mouseout", () => hoverBox.classList.remove("hovered"));

document.getElementById("keypressInput").addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

document.getElementById("clickBtn").addEventListener("dblclick", () => {
  alert("Double-click detected!");
});

// Interactive Elements
document.getElementById("changeColorBtn").addEventListener("click", function () {
  this.style.backgroundColor = "green";
  this.textContent = "Changed!";
});

let imgIndex = 0;
const images = [
  "https://images.pexels.com/photos/30876390/pexels-photo-30876390/free-photo-of-delicious-multi-grain-bread-with-toppings-in-artistic-still-life.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/7182218/pexels-photo-7182218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/32056994/pexels-photo-32056994/free-photo-of-dramatic-beach-sunset-in-sinaloa-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("slide").src = images[imgIndex];
});

function openTab(tabId) {
  document.querySelectorAll(".tabContent").forEach((tab) => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// Form Validation
const form = document.getElementById("myForm");
const feedback = document.getElementById("feedback");

form.addEventListener("input", () => {
  const pwd = document.getElementById("password").value;
  if (pwd.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Password looks good!";
    feedback.style.color = "green";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
