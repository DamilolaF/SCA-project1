const submitBtn = document.getElementById('reg_btn');
const btnLogin = document.getElementById('login_btn');

submitBtn.addEventListener('click', register);
btnLogin.addEventListener('click', check)
//Select all elements
function register(){
    let mail = document.getElementById('mail').value;
    let pw = document.getElementById('psw').value;
    let num = document.getElementById('num').value;
    let userName = document.getElementById('uname').value;
/* //storing to local storage
if(userName == ""){
    userName.style.border = "1px solid red";
    userName.focus();
    alert('Please fill in username');
    return false;
}
 if(pw == ''){
    pw.style.border = "1px solid red";
    alert('Please fill in password');
    pw.focus();
    return false;

} if(userName == "" && pw.length == 0){
    alert('Please fill in email and password');

} if(!pw.match(numbers)){
    alert('please add 1 number');

} if(!pw.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');

}else{  */

    localStorage.setItem('mail', mail)
    localStorage.setItem('psw', pw)
    localStorage.setItem('num',num)
    localStorage.setItem('uname', userName)
    alert('Your account has been created');   

    window.location.href = "login.html";
}



//checking
  function check(){
   let storedMail = localStorage.getItem('mail');
    let storedPw = localStorage.getItem('psw');

    let userMail = document.getElementById('userMail');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");

    if(userMail.value == storedMail && userPw.value == storedPw){
        alert('You are logged in.');
        window.location.href= "profile.html"
    }else{
        alert('Error on login');
    }

} 
 document.


