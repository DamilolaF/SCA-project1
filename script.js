const regForm = document.getElementById('reg_btns');
const loginForm = document.getElementById('login_btns');
const nameForm = document.getElementById('name-form');


//Select all elements
function register(){ 
    const mail = document.getElementById('mail').value;
    const pw = document.getElementById('psw').value;
    const userName = document.getElementById('uname').value;
    const num = document.getElementById('num').value;
    
    //storing to local storage


    window.localStorage.setItem('mail', mail)
    window.localStorage.setItem('psw', pw)
    window.localStorage.setItem('num',num)
    window.localStorage.setItem('uname', userName)
   

    document.getElementById('mail').value = "";
    document.getElementById('psw').value = "";
    document.getElementById('num').value = "";
    document.getElementById('uname').value = ""; 
    alert('Your account has been created');   

    window.location.href ="/login.html";
} 

if(regForm){
    regForm.addEventListener('click', (evt)=> {
        evt.preventDefault()
        register()
    })
}

//checking

function check(){ 
    let storedMail = localStorage.getItem('mail');
    let storedPw = localStorage.getItem('psw');

    let userMail = document.getElementById('userMail');
    let userPw = document.getElementById('userPw');
    let userRemember = document.getElementById("rememberMe");

    if(userMail.value == storedMail && userPw.value == storedPw){
        
        window.localStorage.setItem('code','secret') 
        alert('You are logged in.');

        window.location.href ="/profile.html";
        
    }else{
        alert('Error on login'); 
    }
    
}
if(loginForm){
    loginForm.addEventListener('click', (evt)=> {
        evt.preventDefault()
        check()
    })
  }

//log out
    function logOut(){ 
    nameForm.innerHTML = `Hello ${userName}, Welcome to your profile`;
   let secret = localStorage.getItem('code');
   if (secret=='secret'){
   
}else {
    window.localStorage.clear('uname')
    window.localStorage.clear('mail')
    window.localStorage.clear('num')
    window.localStorage.clear('psw')
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

