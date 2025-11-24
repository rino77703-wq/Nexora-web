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
const db = firebase.firestore();

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
                registerForm.reset();
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
                loginForm.reset();
            })
            .catch(error=>{
                alert("Error: " + error.message);
            });
    });
}

// -------------------
// 4️⃣ دردشة Firestore
// -------------------
const sendBtn = document.getElementById("sendBtn");
if(sendBtn){
    sendBtn.addEventListener("click", ()=>{
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value.trim();
        if(message !== ""){
            db.collection("messages").add({
                text: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            messageInput.value = "";
        }
    });
}

const messagesDiv = document.getElementById("messages");
if(messagesDiv){
    db.collection("messages").orderBy("timestamp")
      .onSnapshot(snapshot => {
        messagesDiv.innerHTML = "";
        snapshot.forEach(doc => {
            const msg = doc.data();
            const div = document.createElement("div");
            div.textContent = msg.text;
            messagesDiv.appendChild(div);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });
    });
}