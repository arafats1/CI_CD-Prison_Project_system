
//Passsword validate
const password = document.getElementById('password');

const passwordError = document.getElementById('passwordError');

const loginPassword = () =>{

    if(password.value == ''){
      password.style.border = '1px solid red';
      passwordError.innerHTML = 'Enter password';
      passwordError.style = 'color:red; font-family: Arial, Helvetica, Sans-Serif';
      return false;

  }else {
      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //Password regex that allows a number, capital letter and special character
      if(passwordRegex.test(password.value) == false) {
          password.style.border = '1px solid red';
          passwordError.innerHTML = 'Wrong Email or Password';
          passwordError.style = 'color: red; font-family: Arial, Helvetica, Sans-Serif';
          return false;

      } 
      password.style.border = "1px solid green"
      passwordError.textContent  = ""

      return true;

  }
  
}

const form = document.getElementById('signin');
form.addEventListener('submit', function(e){
    let formValidation = loginPassword();

    if(!formValidation){
        e.preventDefault();
    }
});