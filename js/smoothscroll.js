document.getElementById("scrollToContact").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});
