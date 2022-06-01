

//Capturing inputs into variables
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const role = document.getElementById('role');
const password = document.getElementById('password');


//Capturing errors
const firstnameError = document.getElementById('firstnameError');
const lastnameError = document.getElementById('lastnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passworderror');
const confirmpasswordError = document.getElementById('confirmpasserror');
const roleError = document.getElementById('roleError')



// Firstname validation
const managerFirstName = () =>{

    if(firstname.value == ''){
        firstname.style.border = '1px solid red';
        firstnameError.innerHTML = 'Enter last name';
        firstnameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const firstnameRegex = /^[A-Z][a-z]*$/; // Name starts witha capital letter
        if(firstnameRegex.test(firstname.value)== false){
            firstname.style.border = '1px solid red';
            firstnameError.innerHTML = 'First name should start with capital letter ';
            firstnameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            const firstNameRegexLength = /^[A-Z][a-z]{2,20}$/;
            if(firstNameRegexLength.test(firstname.value)=== false){
                firstname.style.border = '1px solid red';
                firstnameError.innerHTML = 'First name should be 3-10 characters';
                firstnameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                
                return false;
            }
            
            firstname.style.border = "1px solid green"
            firstnameError.textContent  = ""
    
            return true;
        }
    }
}



// validating the lastname
const managerLastName = () =>{

    if(lastname.value == ''){
        lastname.style.border = '1px solid red';
        lastnameError.innerHTML = 'Enter driver name';
        lastnameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else{
        const lastnameRegex = /^[A-Z][a-z]*$/; // Name starts witha capital letter
        if(lastnameRegex.test(lastname.value)== false){
            lastname.style.border = '1px solid red';
            lastnameError.innerHTML = 'Last name should start with capital letter ';
            lastnameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        }else{
            const lastNameRegexLength = /^[A-Z][a-z]{2,20}$/;
            if(lastNameRegexLength.test(lastname.value)=== false){
                lastname.style.border = '1px solid red';
                lastnameError.innerHTML = 'Last name should be 3-10 characters';
                lastnameError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
                
                return false;
            }
            
            lastname.style.border = "1px solid green"
            lastnameError.textContent  = ""
    
            return true;
        }
    }

}


// validating the email
const managerEmail = () => {

    if(email.value == ''){
        email.style.border = '1px solid red';
        emailError.innerHTML = 'Please provide your email';
        emailError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRegex.test(email.value)== false){
            email.style.border = '1px solid red';
            emailError.innerHTML = 'Provide a valid email';
            emailError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;
        }

            email.style.border = "1px solid green"
            emailError.textContent  = ""
    
            return true;
        
    }
}


// validating the password to accept a strong password
const managerPassword = (max,min) =>{

      if(password.value == ''){
        password.style.border = '1px solid red';
        passwordError.innerHTML = 'Input password with characters between 6 and 16';
        passwordError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
        return false;

    }else {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //Password regex that allows a number, capital letter and special character
        if(passwordRegex.test(password.value) == false) {
            password.style.border = '1px solid red';
            passwordError.innerHTML = 'Password must include a number, special character, upper and lower case characters between 6 and 16';
            passwordError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
            return false;

        } 
        password.style.border = "1px solid green"
        passwordError.textContent  = ""

        return true;

    }
    
}


// confirmpassword validation 
const passwordConfirm = () =>{
    let passwordid = document.register.password.value;
    let passwordConfirm = document.register.confirmpassword.value;
    if (passwordid != passwordConfirm) {

        confirmpassword.style.border ='1px solid red'
        confirmpasswordError.textContent ='passwords dont match'
        confirmpassword.focus()
        return false;
    }
     else {
        confirmpasswordError.innerHTML = '';
        confirmpassword.style.border ='1px solid green'
        return true
    }
}


//Manager Role Validation
const managerRole = ()=>{
        
        if(role.value == "Default"){
            role.style.border = "1px solid red"
            roleError.textContent = "Select manager role"
            roleError.style = "color: red"
            return false
    
        }else{
            role.style.border = "1px solid green"
            roleError.textContent = ""
        };
}


//Creating a function that will check all fields before allowing a form to submit
const form = document.getElementById('formReg');
form.addEventListener('submit', function(e){
    let formValidation = 
    managerFirstName()&&
    managerLastName()&&
    managerEmail()&&
    managerPassword()&&
    passwordConfirm()&&
    managerRole();

    if(!formValidation){
        e.preventDefault();
    }
});

