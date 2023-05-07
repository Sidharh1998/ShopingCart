let firstNameInput = document.querySelector(".f-name")
let lastNameInput = document.querySelector(".l-name")
let emailInput = document.querySelector(".email")
let password = document.querySelector(".password")
let confirmPassword=document.querySelector(".c-password")
let arrOfUsers=[]
console.log("Hiii");


document.querySelector(".btn-signup").addEventListener("click",()=>{
    console.log("hhh")
    let user={
        firstName:firstNameInput.value,
        lastName:lastNameInput.value,
        email:emailInput.value,
        password:password.value,
        confirmPassword:confirmPassword.value
    }
arrOfUsers.push(user);
console.log(arrOfUsers);

localStorage.setItem("arryOfUsers",JSON.stringify(arrOfUsers))

firstNameInput.value="";
lastNameInput.value="";
emailInput.value="";
password.value ="";
confirmPassword.value="";

setTimeout(location.assign("../login/index.html"),1000)
})

