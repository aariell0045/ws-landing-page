import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBR64DDiW_Ifr3aPpNCQfdpoXN6VggTPpg",
	authDomain: "ws-we-send-landing-page.firebaseapp.com",
	projectId: "ws-we-send-landing-page",
	storageBucket: "ws-we-send-landing-page.appspot.com",
	messagingSenderId: "1027038146371",
	appId: "1:1027038146371:web:d2a43c8fceea1978e1c9f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
app();
