// Write your script here
let arrayOfUsers=JSON.parse(localStorage.getItem("arryOfUsers"))
let currentUser=JSON.parse(localStorage.getItem("currentUser"))
console.log(arrayOfUsers)
console.log(currentUser)

let position=-1;
for(let i=0;i<arrayOfUsers.length;i++){
if(currentUser.email==arrayOfUsers[i].email){
    position=i;
}
}


document.querySelector(".save-info").addEventListener("click",()=>{
   let fName= document.querySelector(".f-name").value
   let lName= document.querySelector(".l-name").value
   
   arrayOfUsers[position].firstName=fName;
   arrayOfUsers[position].lastName=lName;
localStorage.setItem("arryOfUsers",JSON.stringify(arrayOfUsers))
document.querySelector(".f-name").value="";
document.querySelector(".l-name").value="";
})


document.querySelector(".Change-pass").addEventListener("click",()=>{
    let oldPass= document.querySelector(".old-pass").value
    let newPass= document.querySelector(".new-pass").value
    let confirmPass= document.querySelector(".con-pass").value
    if(newPass!=confirmPass){
        alert("New Password and Confirm Password should be same Try Again")
        document.querySelector(".new-pass").value="";
        document.querySelector(".con-pass").value="";
    }
  
    else if(oldPass==currentUser.password){
        arrayOfUsers[position].password=confirmPass;
        currentUser.password=confirmPass;
     localStorage.setItem("arryOfUsers",JSON.stringify(arrayOfUsers))
     localStorage.setItem("currentUser",JSON.stringify(currentUser))

     document.querySelector(".old-pass").value="";
     document.querySelector(".con-pass").value="";
     document.querySelector(".con-pass").value="";

    }
    else{
        alert(" Wrong  credential")
        document.querySelector(".old-pass").value="";
        document.querySelector(".new-pass").value="";
        document.querySelector(".con-pass").value="";
    }



 
 })

 
document.querySelector(".logout").addEventListener("click",()=>{

currentUser={}
localStorage.setItem("currentUser",JSON.stringify(currentUser))
location.assign("../login/index.html")
})
