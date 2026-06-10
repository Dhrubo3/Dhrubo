
document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("successMsg").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let isValid = true;

    // Name Validation
    const nameRegex = /^[A-Za-z\s]+$/;

    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }
    else if(!nameRegex.test(name)){
        document.getElementById("nameError").innerText =
        "Name can contain only letters and spaces";
        isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    }
    else if(!emailRegex.test(email)){
        document.getElementById("emailError").innerText =
        "Enter a valid email address";
        isValid = false;
    }

    // Bangladeshi Number Validation
    const bdPhoneRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;

    if(phone === ""){
        document.getElementById("phoneError").innerText =
        "Phone number is required";
        isValid = false;
    }
    else if(!bdPhoneRegex.test(phone)){
        document.getElementById("phoneError").innerText =
        "Enter a valid Bangladeshi mobile number";
        isValid = false;
    }

    // Password Validation
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/;

    if(password === ""){
        document.getElementById("passwordError").innerText =
        "Password is required";
        isValid = false;
    }
    else if(!passwordRegex.test(password)){
        document.getElementById("passwordError").innerText =
        "Password must contain uppercase, lowercase, number, special character and be at least 8 characters long";
        isValid = false;
    }

    if(isValid){
        document.getElementById("successMsg").innerText =
        "Form submitted successfully!";
    }

});

if (isValid) {
    alert("Registration completed successfully.");
}