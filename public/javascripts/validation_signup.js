const form = document.querySelector(".signInForm"),
      email = form.querySelector("input[name='email']"),
      password = form.querySelector("input[name='password']"),
      passwordAgain = form.querySelector("input[name='passwordAgain']"),
      passwordEye = form.querySelector('#passwordEye'),
      passwordAgainEye = form.querySelector('#passwordAgainEye'),
      checkbox = form.querySelector('.checkbox'),
      rule1 = document.querySelector('#rule1'),
      rule2 = document.querySelector('#rule2'),
      rule3 = document.querySelector('#rule3'),
      rule4 = document.querySelector('#rule4'),
      rule5 = document.querySelector('#rule5');
      

passwordEye.addEventListener("click", (e)=>{
    if (password.type == 'text') {
        password.type = 'password';
    } else {
        password.type = 'text';
    }
});

passwordAgainEye.addEventListener("click", (e)=>{
    if (passwordAgain.type == 'text') {
        passwordAgain.type = 'password';
    } else {
        passwordAgain.type = 'text';
    }
});

function validate(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = email.value;
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
    } else {
        email.style.border="";
    }
    if (!checkbox.checked) {
        checkbox.parentElement.style.border="1px solid red";
    } else {
        checkbox.parentElement.style.border="";
    }
    if ((rule1.classList == "rulesTextError") || 
        (rule2.classList == "rulesTextError") || 
        (rule3.classList == "rulesTextError") || 
        (rule4.classList == "rulesTextError") || 
        (rule5.classList == "rulesTextError")) {
        password.style.border="1px solid red";
    } else {
        password.style.border="";
    }
    if (password.value != passwordAgain.value) {
        passwordAgain.style.border="1px solid red";
    }  else {
        passwordAgain.style.border="";
    }
}); 

password.addEventListener("input", (e) => {
    let pass = password.value;
    if (pass.length >= 8) {
        rule1.parentElement.classList.add("listItemRight");
        rule1.classList.add("rulesTextRight");
    } else {
        rule1.parentElement.classList.remove("listItemRight");
        rule1.classList.remove("rulesTextRight");
    }
});

password.addEventListener("input", (e) => {
    let pass = password.value;
    let count = 0;
    const containsLetters = /[A-Z]/;
    rule2.parentElement.classList.remove("listItemRight");
    rule2.classList.remove("rulesTextRight");
    for (let bukva of pass){
        if (containsLetters.test(bukva)) {
            count++;
            if (count >= 2) {
                rule2.parentElement.classList.add("listItemRight");
                rule2.classList.add("rulesTextRight");
            } else {
                rule2.parentElement.classList.remove("listItemRight");
                rule2.classList.remove("rulesTextRight");
            }
        } 
    }
});

password.addEventListener("input", (e) => {
    let pass = password.value;
    const withoutSpecialChars = /^[^-()/!@^]*$/;
    if (!withoutSpecialChars.test(pass)) {
        rule3.parentElement.classList.add("listItemRight");
        rule3.classList.add("rulesTextRight");
    } else {
        rule3.parentElement.classList.remove("listItemRight");
        rule3.classList.remove("rulesTextRight");
    }
});

password.addEventListener("input", (e) => {
    let pass = password.value;
    const numbers = /[0-9]/;
    if (numbers.test(pass)) {
        rule4.parentElement.classList.add("listItemRight");
        rule4.classList.add("rulesTextRight");
    } else {
        rule4.parentElement.classList.remove("listItemRight");
        rule4.classList.remove("rulesTextRight");
    }
});

password.addEventListener("input", (e) => {
    let pass = password.value;
    const Spaces = /[\s]/;
    if (Spaces.test(pass)) {
        rule5.parentElement.classList.remove("listItemRight");
        rule5.classList.remove("rulesTextRight");
        rule5.parentElement.classList.add("listItemError");
        rule5.classList.add("rulesTextError");
    } else {
        rule5.parentElement.classList.remove("listItemError");
        rule5.classList.remove("rulesTextError");
        rule5.parentElement.classList.add("listItemRight");
        rule5.classList.add("rulesTextRight");
    }
});
