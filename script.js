const first = document.getElementById("first_name");
const form = document.getElementById("form");
const email = document.getElementById("user_email");
const password = document.getElementById("user_password");
const confirmPassword = document.getElementById("password");
const last = document.getElementById("last_name");

form.addEventListener("submit", (e) => {
    let messages = []
    if (first.value === "" || first.value == null) {
        first.classList.add("red");
    }
    if (last.value === "" || last.value == null) {
        last.classList.add("red");    
    }
    if (password.value !== confirmPassword.value) {
        password.classList.add("red");
        confirmPassword.classList.add("red");
        
    }
    e.preventDefault();
});