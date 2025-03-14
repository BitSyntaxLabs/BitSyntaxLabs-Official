document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  fetch("./components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Fetch and inject menu.js after navbar is loaded
      return fetch("./js/menu.js");
    })
    .then((response) => response.text())
    .then((scriptContent) => {
      const script = document.createElement("script");
      script.textContent = scriptContent; // Inject menu.js inline
      document.body.appendChild(script);

      return fetch("./js/scroll.js");	// Fetch and inject scroll.js after menu.js is loaded
    })
    .then((response) => response.text())
    .then((scriptContent) => {
      const script = document.createElement("script");
      script.textContent = scriptContent; // Inject scroll.js inline
      document.body.appendChild(script);

      return fetch("./js/smoothscroll.js");	// Fetch and inject smoothscroll.js after scroll.js is loaded
    })
    .then((response) => response.text())
    .then((scriptContent) => {
      const script = document.createElement("script");
      script.textContent = scriptContent; // Inject smoothscroll.js inline
      document.body.appendChild(script);

      return fetch("./js/captcha.js");	// Fetch and inject captcha.js after smoothscroll.js is loaded
    })
    .then((response) => response.text())
    .then((scriptContent) => {
      const script = document.createElement("script");
      script.textContent = scriptContent; // Inject captcha.js inline
      document.body.appendChild(script);

      return fetch("./js/formredirect.js");	// Fetch and inject formredirect.js after captcha.js is loaded
    })
    .then((response) => response.text())
    .then((scriptContent) => {
      const script = document.createElement("script");
      script.textContent = scriptContent; // Inject formredirect.js inline
      document.body.appendChild(script);
    })
    .catch((error) => console.error("Error loading scripts:", error));

  // Load Footer
  fetch("./components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
});