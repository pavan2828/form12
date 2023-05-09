let nameElement = document.getElementById('name');
let emailElement = document.getElementById('email');
let passwordElement = document.getElementById('password');
let errorElement = document.getElementById('errorMsg');
let signupCheckbox = document.getElementById('checkbox')

let loginEmail = document.getElementById('loginemail');
let loginPassword = document.getElementById('loginpassword');
let loginBtn = document.getElementById('login');
let loginError = document.getElementById('loginError');


let signupBtn = document.getElementById('signup')
signupBtn.onclick = function() {
    if (nameElement.value !== '' && emailElement.value !== '' && passwordElement.value !== '') {
        errorElement.textContent = ''
        nameElement.value = ''
        passwordElement.value = ''
        emailElement.value = ''
        signupCheckbox = true;
        alert('successfully Registered')
        
    }
    else{
        
        errorElement.textContent  = '>>>Please fill all the boxes';
    }
}



loginBtn.onclick = function() {
    if(loginEmail.value = 'AV' && loginPassword.value != '123') {
        loginError.textContent = ''
        alert('loggedin');


    } else{
        loginError.textContent = '>>>Invalid Credentials';
    }
}