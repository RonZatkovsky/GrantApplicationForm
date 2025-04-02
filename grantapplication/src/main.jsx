import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkKKIVcpuf77r18KXcMpRWV2U7y72rZGI",
  authDomain: "application-form-grant.firebaseapp.com",
  projectId: "application-form-grant",
  storageBucket: "application-form-grant.firebasestorage.app",
  messagingSenderId: "205447318278",
  appId: "1:205447318278:web:54da67da1765ee2ad32c87",
  measurementId: "G-8G68FRP25C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
