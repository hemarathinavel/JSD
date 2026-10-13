
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const message = document.getElementById("message");
const switchLink = document.getElementById("switchLink");
const switchText = document.getElementById("switchText");
const togglePassword = document.getElementById("togglePassword");

let isRegister = false;

// Get registered users
function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}

// Show message
function showMessage(text, success = false) {
    message.textContent = text;
    message.style.color = success ? "#16834a" : "#d93045";
}

// Switch between Login and Register
function updateForm() {
    loginForm.classList.toggle("hidden", isRegister);
    registerForm.classList.toggle("hidden", !isRegister);

    title.textContent = isRegister
        ? "Create Account"
        : "Welcome Back!";

    subtitle.textContent = isRegister
        ? "Join us and start your journey"
        : "Login to continue your journey";

    switchText.firstChild.textContent = isRegister
        ? "Already have an account? "
        : "Don't have an account? ";

    switchLink.textContent = isRegister ? "Login" : "Sign up";

    showMessage("");
}

switchLink.addEventListener("click", function (event) {
    event.preventDefault();
    isRegister = !isRegister;
    updateForm();
});

// Show or hide password
togglePassword.addEventListener("click", function () {
    const password = document.getElementById("password");
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "Hide" : "Show";
});

// Register new user
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("newUsername")
        .value.trim();

    const password = document.getElementById("newPassword").value;
    const users = getUsers();

    if (users.some(user =>
        user.username.toLowerCase() === username.toLowerCase()
    )) {
        showMessage("Username already exists!");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must contain at least 6 characters.");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    registerForm.reset();
    isRegister = false;
    updateForm();

    document.getElementById("username").value = username;

    showMessage("Account created! Please login.", true);
});

// Login validation
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username")
        .value.trim();

    const password = document.getElementById("password").value;

    const user = getUsers().find(item =>
        item.username === username &&
        item.password === password
    );

    if (!user) {
        showMessage("Invalid username or password!");
        return;
    }

    sessionStorage.setItem("loggedInUser", user.username);

    window.location.href = "dashboard.html";
});
