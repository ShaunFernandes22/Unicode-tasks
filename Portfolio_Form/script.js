function validateForm(){
    var name = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;


    if (name == ""){
        document.getElementById('username').innerHTML ="* Please fill the name field";
        return false;
    }
    if ((name.length <= 2) || (name.length > 20)) {
        document.getElementById('username').innerHTML ="* Name length must be between 3 to 20 characters long";
        return false;
    }

 
    if (email == ""){
        document.getElementById('E-mail').innerHTML ="* Please fill the e-mail field";
        return false;
    }
    if (email.indexOf('@') == 0 ) {
        document.getElementById('E-mail').innerHTML ="* Please enter valid E-mail";
        return false;
    }
    if (email.charAt(email.length-4)!='.') {
        document.getElementById('E-mail').innerHTML ="* Please enter valid E-mail ";
        return false;
    }


    if (phone == ""){
        document.getElementById('Mobile').innerHTML ="* Please fill the Mobile Number field";
        return false;
    }
    if(isNaN(phone)) {
        document.getElementById('Mobile').innerHTML ="* Please enter digits only";
        return false;
    }
    if (phone.length!=10) {
        document.getElementById('Mobile').innerHTML ="* Mobile Number must be a 10 digit number";
        return false;
    }


    var f_name = /^[A-Za-z] + $/;
    if (name.match(f_name)) {
        return true;
    }
    else  {
        document.getElementById('username').innerHTML ="* Only alphabets allowed";
        return false;    
    }

    }
   
    













