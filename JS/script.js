// contact section

//litsen for form submit

document.getElementById('contactform').addEventListener('submit',SubmitForm);

function SubmitForm(e){
    e.preventDefault();

  // get values
  var Fname = getInputVal('Fname');
  var Lname = getInputVal('Lname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  console.log(Fname);
  console.log(Lname);
  console.log(email);
  
}

//  function to get for values 

function getInputVal(id){
return document.getElementById(id).value;
}