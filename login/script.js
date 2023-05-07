let emailInput = document.querySelector(".email")
let passwordInput = document.querySelector(".password")
let user={}
let arr;

document.querySelector(".login").addEventListener("click",()=>{
    
    user.email=emailInput.value;
    user.password=passwordInput.value;
   
     arr=JSON.parse(localStorage.getItem("arryOfUsers"))
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].email==user.email && arr[i].password==user.password )
        {
            console.log("Logegd In");
            localStorage.setItem("currentUser",JSON.stringify(user));
            setTimeout(location.assign("../shop/index.html"),1000)
        }
        else{
            alert("Wrong credentials")
        }
    }
    
   
   
   
  

})