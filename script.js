
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    // TC_03: Empty fields
    if (user === "" || pass === "") {
        msg.innerText = "Fields cannot be empty";
        return;
    }

    // TC_04: SQL Injection basic check
    if (user.includes("' OR")) {
        msg.innerText = "SQL Injection detected!";
        return;
    }

    // Password length validation (Task 2)
    if (pass.length < 8 || pass.length > 12) {
        msg.innerText = "Password must be 8–12 characters";
        return;
    }

    // TC_01: Valid login
    if (user === "admin" && pass === "password123") {
        msg.innerText = "Login successful!";
    } else {
        // TC_02: Invalid login
        msg.innerText = "Invalid credentials";
    }
}
