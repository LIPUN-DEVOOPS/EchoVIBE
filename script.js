// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
      const menuIcon = document.querySelector(".menu-icon");
      const navLinks = document.querySelector(".nav-links");
  
      menuIcon.addEventListener("click", function () {
          navLinks.classList.toggle("active");
      });
  });
  
  // Search functionality
//   document.querySelector(".search-box button").addEventListener("click", function () {
//       let searchTerm = document.querySelector(".search-box input").value.toLowerCase();
//       alert("Searching for: " + searchTerm);
//       // Implement search logic (e.g., filter content dynamically)
//   });
  
  // script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form values
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Simulate login (replace with actual login logic)
      if (email && password) {
          alert(`Logged in as: ${email}`);
          // Redirect to another page (e.g., dashboard)
          // window.location.href = 'dashboard.html';
      } else {
          alert('Please fill in all fields.');
      }
  });


  document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector("form");
  
      form.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form submission
  
          const name = document.querySelector("input[type='text']").value.trim();
          const email = document.querySelector("input[type='email']").value.trim();
          const password = document.querySelectorAll("input[type='password']")[0].value.trim();
          const confirmPassword = document.querySelectorAll("input[type='password']")[1].value.trim();
  
          if (name === "" || email === "" || password === "" || confirmPassword === "") {
              showError("All fields are required!");
              return;
          }
  
          if (!validateEmail(email)) {
              showError("Invalid email format!");
              return;
          }
  
          if (password.length < 6) {
              showError("Password must be at least 6 characters!");
              return;
          }
  
          if (password !== confirmPassword) {
              showError("Passwords do not match!");
              return;
          }
  
          showSuccess("Registration successful!");
          
          // Simulating a redirect after successful registration
          setTimeout(() => {
              window.location.href = "login.html"; // Redirect to login page
          }, 2000);
      });
  });
  
  // Function to validate email
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
  
  // Function to show error messages
  function showError(message) {
      const errorBox = document.createElement("div");
      errorBox.classList.add("message-box", "error");
      errorBox.textContent = message;
      document.body.appendChild(errorBox);
      setTimeout(() => errorBox.remove(), 3000);
  }
  
  // Function to show success messages
  function showSuccess(message) {
      const successBox = document.createElement("div");
      successBox.classList.add("message-box", "success");
      successBox.textContent = message;
      document.body.appendChild(successBox);
      setTimeout(() => successBox.remove(), 3000);
  }

  // Define available search options (key: search term, value: redirect URL)
const searchOptions = {
    "music": "music.html",
    "video": "video.html",
    "rock": "rock-music.html",
    "pop": "pop-music.html",
    "action": "action-videos.html",
    "comedy": "comedy-videos.html"
};

document.getElementById("search-button").addEventListener("click", function() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    
    if (searchOptions[searchInput]) {
        // Redirect if match found
        window.location.href = searchOptions[searchInput];
    } else {
        // Show "Not Found" message
        alert("Not Found! Please try a different search.");
    }
});

  // Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".video-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        observer.observe(card);
    });
});
