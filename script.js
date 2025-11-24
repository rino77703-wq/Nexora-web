// -------------------
// 1️⃣ Firebase Config
// -------------------
const firebaseConfig = {
  apiKey: "ضع هنا apiKey من Firebase",
  authDomain: "ضع هنا authDomain من Firebase",
  projectId: "ضع هنا projectId من Firebase",
  storageBucket: "ضع هنا storageBucket من Firebase",
  messagingSenderId: "ضع هنا messagingSenderId من Firebase",
  appId: "ضع هنا App ID من Firebase",
  measurementId: "ضع هنا measurementId من Firebase (اختياري)"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// -------------------
// 2️⃣ تسجيل مستخدم جديد (Sign Up)
// -------------------
const registerForm = document.getElementById("registerForm");
if(registerForm){
    registerForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert("Sign Up successful!");
                registerForm.reset(); // تفريغ الحقول بعد التسجيل
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    });
}

// -------------------
// 3️⃣ تسجيل الدخول (Login)
// -------------------
const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential=>{
                alert("Login successful!");
                loginForm.reset(); // تفريغ الحقول بعد الدخول
            })
            .catch(error=>{
                alert("Error: " + error.message);
            });
    });
}