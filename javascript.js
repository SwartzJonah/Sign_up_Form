const form  = document.getElementById('signupForm');
let password = document.getElementById("password").value;
let confirmpassword = document.getElementById("confirmpassword").value;

form.addEventListener('submit',function (event) {
    password = document.getElementById("password").value;
    confirmpassword = document.getElementById("confirmpassword").value;
    if (password != confirmpassword) {
        console.log(password);
        console.log(confirmpassword);
        alert("Password and Confirm Password must match")
        event.preventDefault()
    }
});