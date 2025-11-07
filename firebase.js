// Firebase Setup for DCS Smart Portal
const firebaseConfig = {
  apiKey: "AIzaSyB2lmG_5W7N6wEkYG7XcRebLxIKnb4Nhoo",
  authDomain: "school-management-2-7356b.firebaseapp.com",
  databaseURL: "https://school-management-2-7356b-default-rtdb.firebaseio.com",
  projectId: "school-management-2-7356b",
  storageBucket: "school-management-2-7356b.firebasestorage.app",
  messagingSenderId: "372406353550",
  appId: "1:372406353550:web:f1b2e427c44402b4bbd3df",
  measurementId: "G-NBLR44WEFV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create shortcuts
const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();
console.log("✅ Firebase loaded:", firebase.apps.length);
