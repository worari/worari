import { auth } from './firebase-config.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

window.register = async () => {
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  await createUserWithEmailAndPassword(auth, email, password);
  alert('สมัครสมาชิกสำเร็จ');
  window.location.href = 'dashboard.html';
};

window.login = async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  await signInWithEmailAndPassword(auth, email, password);
  window.location.href = 'dashboard.html';
};

window.resetPassword = async () => {
  const email = document.getElementById('reset-email').value;
  await sendPasswordResetEmail(auth, email);
  alert('ส่งอีเมลรีเซ็ตรหัสผ่านแล้ว');
};
