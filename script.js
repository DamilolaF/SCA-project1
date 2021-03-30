/*   const submitBtn = document.getElementById('reg_btns');
  const btnLogin = document.getElementById('login_btns');
 */

//Select all elements
function register(){ 
    let mail = document.getElementById('mail').value;
    let pw = document.getElementById('psw').value;
    let num = document.getElementById('num').value;
    let userName = document.getElementById('uname').value;
    
    //storing to local storage

     if(userName.length == ""){
    userName.style.border = "1px solid red";
    userName.focus();
    alert('Please fill in username');
    return false;
}
 else if(pw == ''){
    pw.style.border = "1px solid red";
    alert('Please fill in password');
    pw.focus();
    return false;

} else if(userName == "" && pw.length == 0){
    alert('Please fill in email and password');

} else if(!pw.match(numbers)){
    pw.style.border = "1px solid red";
    alert('please add 1 number');

} else if(!pw.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');


}else { 

    localStorage.setItem('mail', mail)
    localStorage.setItem('psw', pw)
    localStorage.setItem('num',num)
    localStorage.setItem('uname', userName)
   

    document.getElementById('mail').value = "";
    document.getElementById('psw').value = "";
    document.getElementById('num').value = "";
    document.getElementById('uname').value = "";
    alert('Your account has been created');   

    window.location.href ="/login.html";
} 
}
/* document.addEventListener("DOMContentLoaded", function(){
    submitBtn.addEventListener('click', register());
loginBtn.addEventListener('click', check());
}) */
 
//checking

function check(){ 
    let userName = localStorage.getItem('uname')
    let storedMail = localStorage.getItem('mail');
    let storedPw = localStorage.getItem('psw');

    let userMail = document.getElementById('userMail');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");

    if(userMail.value == storedMail && userPw.value == storedPw){
        
        localStorage.setItem('code','secret') 
        alert('You are logged in.');

        window.location.href ="/profile.html";
        
    }else{
        alert('Error on login'); 
    }
    
}


//log out
    function logOut(){ 
   let secret = localStorage.getItem('code');
   if (secret=='secret'){
   
}else {
    window.localStorage.removeItem('uname')
    window.localStorage.removeItem('mail')
    window.localStorage.removeItem('num')
    window.localStorage.removeItem('psw')
    window.location.href="/login.html";
    alert("Logged out successfully!")
    document.classList.remove('container')
    document.style.display = none;
    }   
}
function logoutForm(){
    document.getElementById('logout').addEventListener('click',
    logout()
    )
}
