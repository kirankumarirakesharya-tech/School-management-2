// Firebase Setup for DCS Smart Portal
const firebaseConfig = {
  apiKey: "AIzaSyAqWfVIxOvP7vcV96n0as5FwDovhccTtLE",
  authDomain: "smart-school-dilasagram.firebaseapp.com",
  databaseURL: "https://smart-school-dilasagram-default-rtdb.firebaseio.com",
  projectId: "smart-school-dilasagram",
  storageBucket: "smart-school-dilasagram.appspot.com",
  messagingSenderId: "646237863186",
  appId: "1:646237863186:web:2d95dd8c983625f67587cb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create shortcuts
const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();
console.log("✅ Firebase loaded:", firebase.apps.length);