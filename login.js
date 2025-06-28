
// LOGIN
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // Login sederhana: username = admin, password = 123

      if (username === "eri irawan" && password === "123") {
        window.location.href = "Profile.html";
      } else {
        document.getElementById("errorMessage").style.display = "block";
      }
    });


