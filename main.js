let password = document.querySelector('#pass');
const loginBtn = document.querySelector('#login');
const showerror = document.querySelector('#errormsg3');

function login(){
 // var passPattern =  /^([0-9 a-z A-Z]{8,})$/g;
 
  
    if(password.value.length < 6){
        showerror.className = "errors";
        showerror.innerHTML ="Please enter password above 6 characters";
        return false;
    }
    else{
        showerror.className = "errorm";
        showerror.innerHTML ="Login success";
       
    }
        
}
loginBtn.addEventListener('click', login);