require("dotenv").config();

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FB_API,
    authDomain: process.env.FB_ID + ".firebaseapp.com",
    databaseURL: process.env.FB_ID + ".firebaseio.com",
    projectId: process.env.FB_ID,
    storageBucket: process.env.FB_ID + ".appspot.com",
    messagingSenderId: "441008781495",
    appId: "1:441008781495:web:cb4db68eae645c7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebaseConfig;