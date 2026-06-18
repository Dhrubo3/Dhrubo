// REAL TIME CLOCK
function updateTime() {
  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = new Date().toLocaleTimeString();
  }
}
setInterval(updateTime, 1000);

// FORM VALIDATION
function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let valid = true;

  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Valid email required";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("messageError").textContent = "Message must be 10+ characters";
    valid = false;
  }

  if (valid) {
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
  }
}