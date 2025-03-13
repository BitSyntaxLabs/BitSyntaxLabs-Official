document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var form = this;
    var formData = new FormData(form);

    fetch("https://formspree.io/f/mjkyvleo", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            // Redirect to success page
            window.location.href = "https://bitsyntaxlabs.ra3.us/success.html";
        } else {
            alert("Error submitting form. Please try again.");
        }
    }).catch(error => {
        console.error("Error:", error);
    });
});