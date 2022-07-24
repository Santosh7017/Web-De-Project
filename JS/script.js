


// //getting input by id

// var Fname = document.getElementById('Fname');
// var Lname = document.getElementById('Lname');
// var Phone = document.getElementById('phone');
// var Email = document.getElementById('email');
// var Message = document.getElementById('message');
// function insertData(e){
//      e.preventDefault();
// }

// function readData(){
//      console.log(Fname)
// }

// function deleteData(){

// }

// var fname, lname, phone, email, message;
// function readFormData(){
//     fname = Fname.value;
//     lname = Lname.value;
//     phone = Phone.value;
//     email = Email.value;
//     message = Message.value;
//     console.log(fname, lname, phone, email);
// }

// readFormData();
var fname, lname,email,phone,message;
import {getDatabase, ref ,get,set, } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

const db = getDatabase();  
// send data to database



var Fname = document.getElementById('Fname');
var Lname = document.getElementById('Lname');
var Phone = document.getElementById('phone');
var Email = document.getElementById('email');
var Message = document.getElementById('message');


document.getElementById('contactform').addEventListener("submit", insertData);


function submitForm(e) {
     e.preventDefault();
   
     //   Get input Values
     fname = Fname.value;
     lname = Lname.value;
     email = Email.value;
     phone = Phone.value;
     message = Message.value;
    
    
     console.log(fname, lname, phone, email, message);
   
     // saveContactInfo(name, email, message);
   
     // document.querySelector(".contact-form").reset();
     document.getElementById('contactform').reset();

   }

   function insertData(e){
    e.preventDefault();
    submitForm(e);
  
    set(ref(db, "data/"+ email),{
      EMAIL:  email,
      PHONE: phone,
      FNAME: fname,
      LNAME: lname,
      MESSAGE: message
  
    }).then(()=>{
      alert("Data stored succesfully");
    }).catch((error)=>{alert("unsuccesfully",error)});  
    document.getElementById('contactform').reset(); 
    document.getElementById('contactform').reset();
  
  }
   

   // firebase project create