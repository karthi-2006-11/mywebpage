
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#Email');
const password = document.querySelector('#password');

form.addEventListener('submit',(e) => {

    e.preventDefault()

    vaildateInputs();
})

function vaildateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if(usernameVal ===''){
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please Enter valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal===''){
        setError(password,'password is required')
    }
    else if(passwordVal.length < 8){
        setError(password,'password must contain atleast 8 characters')
    }
    else{
        setSuccess(password)
    }
}

function setError(element,message){
    const input = element.parentElement;
    const errorElement = input.querySelector('.error');

    errorElement.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');

}

function setSuccess(element){
    const input = element.parentElement;
    const errorElement = input.querySelector('.error');

    errorElement.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');

}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match (
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

};