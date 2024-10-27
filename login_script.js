 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBM0CbLTeK6Nd5p5xXtQqRcFAoylVRZl50",
   authDomain: "login-example-d3ead.firebaseapp.com",
   projectId: "login-example-d3ead",
   storageBucket: "login-example-d3ead.appspot.com",
   messagingSenderId: "1051176399948",
   appId: "1:1051176399948:web:6f8acaec57d5c04cb4b0e9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

  //  //get ref to database services
  //            const db = getDatabase(app);

  //            document.getElementById("submit").addEventListener('click', function(e){
  //             e.preventDefault();
  //             set(ref(db, 'user/' + document.getElementById("username").value),
  //             {
   
  //               username: document.getElementById("username").value,
  //               email: document.getElementById("email").value,
  //               PhoneNumber: document.getElementById("phone").value

  //             });
  //               alert("Login Sucessfull  !");
  //            })


//submit button
const submit=document.getElementById('submit');
submit.addEventListener("click",function(event){
  event.preventDefault()

  //inputs
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

 createUserWithEmailAndPassword(auth,email,password)
 .then((userCredential) => {
  //signedup
  const user = userCredential.user;
  alert("Creating Acount..")
 })
 .catch((error) =>{
    const errorCode =error.code;
    const errorMessage= error.message;
    alert(errorMessage)

});
})