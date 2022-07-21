// contact section

//litsen for form submit

document.getElementById('contactform').addEventListener('submit',SubmitForm);

function SubmitForm(e){
    e.preventDefault();


  var Fname = getInputVal('Fname');
  var Lname = getInputVal('Lname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  console.log(Fname);
  console.log(Lname);
  console.log(email);
  
}


function getInputVal(id){
return document.getElementById(id).value;
}

// Your web app's Firebase configuration


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAuX-qulFHRObm_XxFAPficsvcWI85d5uM",
//     authDomain: "contactform-a91e8.firebaseapp.com",
//     databaseURL: "https://contactform-a91e8-default-rtdb.firebaseio.com",
//     projectId: "contactform-a91e8",
//     storageBucket: "contactform-a91e8.appspot.com",
//     messagingSenderId: "672604654295",
//     appId: "1:672604654295:web:f03400c334210d7f3c3e92"
//   };

//   // Initialize Firebase
//   // const app = initializeApp(firebaseConfig);

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Refernece contactInfo collections
// let contactInfo = firebase.database().ref("infos");

// Listen for a submit
// document.getElementById('contactform').addEventListener('submit',submitForm);


// function submitForm(e) {
//   e.preventDefault();

//   //   Get input Values
  
//   let Fname = getInputVal('Fname');
//   let Lname = getInputVal('Lname');
//   let email = getInputVal('email');
//   let phone = getInputVal('phone');
//   let message = getInputVal('message');
//   // let email = document.querySelector(".email").value;
//   // let message = document.querySelector(".message").value;
//   // console.log(name, email, message);


// console.log(Fname);
// console.log(Lname);


//   // saveContactInfo(Fname, Lname, phone ,email, message);

//   // document.querySelector(".contact-form").reset();
// }

// // Save infos to Firebase
// // function saveContactInfo(name, email, message) {
// //   let newContactInfo = contactInfo.push();

// //   newContactInfo.set({
// //     name: name,
// //     email: email,
// //     message: message,
// //   });
// // }
