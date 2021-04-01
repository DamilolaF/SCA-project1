const regForm = document.getElementById('reg_form');
const loginForm = document.getElementById('login_form');

if(regForm){
    regForm.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        register()
    })
}

if(loginForm){
    loginForm.addEventListener('submit', (evt)=> {
        evt.preventDefault()
        check()
    })
  }


//Select all elements
function register(){ 
    const mailEl = document.getElementById('mail').value;
    const pwEl = document.getElementById('psw').value;
    const userNameEl = document.getElementById('uname').value;
    const numEl = document.getElementById('num').value
    /* let mail = mailEl.value;
    let pw = pwEl.value;
    let num = numEl.value;
    let userName = userNameEl.value; */

    
    //storing to local storage

     if(userNameEl === ''){
    userNameEl.style.border = "1px solid red";
    userNameEl.focus();
    alert('Please fill in username');
    return false;
}
 if(pw === ''){
    pwEl.style.border = "1px solid red";
    alert('Please fill in password');
    pwEl.focus();
    return false;

} 

 if(!pw.match(num)){
    pw.style.border = "1px solid red";
    alert('please add 1 number');
    return

} 

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

