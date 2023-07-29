let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit',function(event){
    event.preventDefault(); // stops auto form submission
    if(validateForm()){
        alert('Form is submitted Successfully');
    }else{
        alert('Something went wrong');
    }
});
let validateForm = () => { 
    if(checkUserName()  & checkEmail() & checkPassword() & checkConfirmPassword()){
        return true;
    }else{
       return false; 
    }
    //(checkUserName()  & checkEmail() & checkPassword() & checkConfirmPassword());
};
let checkUserName = () => {
    let inputEl = document.querySelector('#username');
    let inputFeedBackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedBackEl);
        return true;
    }else{
        makeInValid(inputEl,inputFeedBackEl);
        return false;
    }
};
let checkEmail = ( ) => {
    let inputEl = document.querySelector('#email');
    let inputFeedBackEl = document.querySelector('#email-feedback');
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedBackEl);
        return true;
    }else{
        makeInValid(inputEl,inputFeedBackEl);
        return false;
    }
}
let checkPassword = ( ) => {
    let inputEl = document.querySelector('#password');
    let inputFeedBackEl = document.querySelector('#password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedBackEl);
        return true;
    }else{
        makeInValid(inputEl,inputFeedBackEl);
        return false;
    }
}
let checkConfirmPassword = ( ) => {
    let inputEl = document.querySelector('#c_password');
    let passwordEl = document.querySelector('#password');
    let inputFeedBackEl = document.querySelector('#c_password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/;
    if(regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
        makeValid(inputEl,inputFeedBackEl);
        return true;
    }else{
        makeInValid(inputEl,inputFeedBackEl);
        return false;
    }
}

let makeValid = (inputEl,inputFeedBackEl) =>{
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedBackEl.classList.add('text-success');
    inputFeedBackEl.classList.remove('text-danger');
    inputFeedBackEl.innerText = 'Looks Good';
};
let makeInValid = (inputEl,inputFeedBackEl) =>{
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedBackEl.classList.remove('text-success');
    inputFeedBackEl.classList.add('text-danger');
    inputFeedBackEl.innerText = `Please Enter a valid ${inputEl.placeholder}`;
};
let usernameEl = document.querySelector('#username');
usernameEl.addEventListener('keyup',function(){
    checkUserName();
})
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup',function(){
    checkEmail();
})
let PasswordEl = document.querySelector('#password');
PasswordEl.addEventListener('keyup',function(){
    checkPassword();
})
let CPasswordEl = document.querySelector('#c_password');
CPasswordEl.addEventListener('keyup',function(){
    checkConfirmPassword();
})