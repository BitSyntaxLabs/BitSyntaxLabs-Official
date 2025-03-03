document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  fetch("./src/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Fetch and inject menu.js after navbar is loaded
      return fetch("./src/js/menu.js");
    })
    .then((response) => response.text())
    .then((scriptContent) => {
      const script = document.createElement("script");
      script.textContent = scriptContent; // Inject menu.js inline
      document.body.appendChild(script);
    })
    .catch((error) => console.error("Error loading navbar or menu.js:", error));

  // Load Footer
  fetch("./src/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});