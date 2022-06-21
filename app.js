// console.log("Welcome to this project");
const names = document.getElementById('Username');
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validnames = false;
let validemail = false;
let validphone = false;

// console.log(phone)
names.addEventListener('blur', () => {
    let regex = /^[A-Za-z]([0-9a-zA-Z]){5,10}$/
    let str = names.value;
    console.log(regex, str)
    if (regex.test(str)) {
        names.classList.add('is-invalid')
        validnames = true;
    }
    else {
        names.classList.add('is-invalid')
    }

})
email.addEventListener('blur', () => {
    console.log("email is blur");
    let regex = /^([a-zA-z0-9\_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regex, str)
    if (regex.text(str)) {
        console.log("emails matched")
        email.classList.remove('is-invalid')
        validemail = true;
    }
    else {
        console.log("not matched")
        email.classList.add("is-invalid")
    }
})
phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid')
        validphone = true
    }
    else {
        phone.classList.add('is-invalid')
    }
})
let sumbit = document.getElementById('submit');
sumbit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validemail && validnames && validphone) {
        let success = document.getElementById('success');
        success.classList.add('show')
    }
    else{
        console.log("failure")
        let failure = document.getElementById('failure');
        failure.classList.add('show');
    }


})