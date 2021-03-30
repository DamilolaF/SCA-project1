  const submitBtn = document.getElementById('reg_btns');
  const btnLogin = document.getElementById('login_btns');


//Select all elements
function register(){
    submitBtn.addEventListener('click', register); 
    let mail = document.getElementById('mail').value;
    let pw = document.getElementById('psw').value;
    let num = document.getElementById('num').value;
    let userName = document.getElementById('uname').value;
    
    //storing to local storage

    /* if(userName.length == ""){
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
    alert('please add 1 number');

} else if(!pw.match(upperCaseLetters)){
    alert('please add 1 uppercase letter');


}else { */

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
 
//checking





function check(){ 
    
    let storedMail = localStorage.getItem('mail');
    let storedPw = localStorage.getItem('psw');

    let userMail = document.getElementById('userMail');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");

    if(userMail.value == storedMail && userPw.value == storedPw){
        
        localStorage.setItem('code','secret') 
        window.location.href="/profile.html";
        alert('You are logged in.');
       
        //welcome
        document.write(`Hello ${userName} welcome` );
    }else{
        alert('Error on login'); 
    }
    
}


//log out
    function logOut(){ 
   let secret = localStorage.getItem('code');
   if (secret=='secret'){
   
}else {
    window.localStorage.removeItem('')
    window.location.href="/login.html";
    }

     
}


