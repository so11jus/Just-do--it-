const form = document.querySelector(".signInForm"),
      email = form.querySelector("input[name='username']"),
      password = form.querySelector("input[name='password']"),
      eye = form.querySelector('#eye');

console.log(email);

function validate(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = email.value;
    if(reg.test(address) == false) {
       return false;
    } else {
        return true;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate(email)) {
        email.style.border="1px solid red";
    }
    if (password.value != "aboba") {
        password.style.border="1px solid red";
    }
    if (validate(email) && password.value == "aboba"){
        form.submit();
    } 
}); 

eye.addEventListener("click", (e)=>{
    if (password.type == 'text') {
        password.type = 'password';
    } else {
        password.type = 'text';
    }
});