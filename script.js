var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");
var message = document.getElementsByClassName("error-message");

console.log(password)
console.log(confirmPassword)
console.log(message)


confirmPassword.addEventListener('change',()=>{
    console.log(password.value)
    console.log(confirmPassword.value)
    if(password.value == confirmPassword.value && password.value != "" && confirmPassword.value != ""){
        message[0].style.visibility = "hidden";
        password.style.outline="1px solid lightgrey";
        confirmPassword.style.outline="1px solid lightgrey";
    
      }else{
          message[0].style.visibility = "visible"; 
          password.style.outline="1px solid red";
          confirmPassword.style.outline="1px solid red";
         
      }
})

