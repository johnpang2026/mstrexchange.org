// Replace firebaseConfig with your own from Firebase Console
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = { /* YOUR CONFIG */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("btnSignIn")?.addEventListener("click",()=>signInWithPopup(auth,provider));
document.getElementById("btnSignOut")?.addEventListener("click",()=>signOut(auth));
