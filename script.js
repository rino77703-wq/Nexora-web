document.addEventListener("DOMContentLoaded", () => {
    // وظيفة تسجيل الدخول التجريبية
    const loginForm = document.getElementById("loginForm");
    if(loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login successful (Demo)");
        });
    }

    // وظيفة التسجيل التجريبية
    const registerForm = document.getElementById("registerForm");
    if(registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Sign Up successful (Demo)");
        });
    }
});