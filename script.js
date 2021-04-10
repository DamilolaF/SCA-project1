const regForm = document.getElementById('reg_btns');
const loginForm = document.getElementById('login_btns');
const nameForm = document.getElementById('name-form');


//Select all elements
function register(){ 
    const mail = document.getElementById('mail').value;
    const psw = document.getElementById('psw').value;
    const uName = document.getElementById('uname').value;
    const num = document.getElementById('num').value;
    
    //storing to local storage
    const loginDetails = {
            mail: mail,
            psw: psw,
            uName: uName,
            num: num
    }

    window.localStorage.setItem('user', JSON.stringify(loginDetails)) 

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
// To display profile
function displayProfile(){
   let {mail, psw, uName, num} = JSON.parse(window.localStorage.getItem('user'));
   let display = document.getElementById('welcome');
   display.innerHTML = `Hello ${uName}, Welcome to your profile`
}
//log out
    function logOut(){ 
    nameForm.innerHTML = `Hello ${uName}, Welcome to your profile`;
   let secret = localStorage.getItem('code');
   if (secret=='secret'){
   
}else {
    window.localStorage.clear('user', JSON.stringify(loginDetails))
    
    window.location.href="/login.html";
    alert("Logged out successfully!")
    document.classList.remove('container')
    document.style.display = none;

    }    
}

/* if(logOutForm){
    logOutForm.addEventListener('click', (evt)=> {
        evt.preventDefault()
        logOut()
    })
  }
 */
