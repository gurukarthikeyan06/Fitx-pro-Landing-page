// Smooth scroll
function scrollToForm() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("🔥 Welcome to FitX Pro!");
  return true;
}

// Navbar shadow on scroll
window.addEventListener("scroll", function () {
  let nav = document.getElementById("navbar");
  nav.style.boxShadow = window.scrollY > 50 ? "0 4px 10px rgba(0,0,0,0.5)" : "none";
});