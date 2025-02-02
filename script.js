function setActive(clickedButton) {
    // Remove 'active' class from all buttons
    document.querySelectorAll(".nav-link").forEach(button => button.classList.remove("active"));
    
    clickedButton.classList.add("active");
}
function toggleActiveClass(checkbox) {
    const navLink = checkbox.closest('.nav-link');
    if (checkbox.checked) {
        navLink.classList.add('active');
    } else {
        navLink.classList.remove('active');
    }
}

function toggleText(button) {
    const currentText = button.innerText;
    
    if (currentText === "DEG") {
        button.innerText = "GRAD";  // Change to Grad
    } else if (currentText === "GRAD") {
        button.innerText = "RAD";  // Change to Rad
    } else {
        button.innerText = "DEG";  // Change back to Degree
    }
}

function keepFocus() {
    const inputElement = document.getElementById("Input-area");

    // Keep the input focused even when clicking elsewhere
    inputElement.focus();

    // Ensure input is focused whenever the page is loaded or focus is lost
    setInterval(() => {
        inputElement.focus();
    }, 100); // Refocus every 100ms
}
window.onload = function() {
    document.getElementById("Input-area").focus();
  }