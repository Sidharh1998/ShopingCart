// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

document.getElementById("addbtn-signup").addEventListener("click",()=>{
   location.assign("./signup/index.html")
})

document.getElementById("addbtn-login").addEventListener("click",()=>{
   setTimeout(location.assign("./login/index.html"),1000)
})