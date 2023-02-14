document.getElementById('btn-submit').addEventListener('click', function(){
    const emailInputField = document.getElementById('email-Field');
    const emailValue = emailInputField.value;
    
    const passwordInputField = document.getElementById('passwordField');
    const passwordValue = passwordInputField.value;

if (emailValue === 'khaan007@gmail.com' && passwordValue === 'khaan007') {
    console.log(window.location.href ='bank.html')
}
else{
alert('Toi password vule gesos ,ture ami teijjo sontan gosona krlm')
}
    
})