let cart=[]

let product;

let fetchProducts= fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              console.log(json)
             product=json;
              showProduct(product);






            })
let currentUser=JSON.parse(localStorage.getItem("currentUser"))
let count=0;
function clicked(id){

  alert("Product Added To Cart")
  cart[count]=product[id-1] 
console.log(cart);
currentUser.cart=cart
console.log(currentUser);
 count++;

 if(cart.length>0){
  document.querySelector(".cart-item").style.color="red";
}

 localStorage.setItem("currentUser",JSON.stringify(currentUser))
}




// ------------------showproduct
function  showProduct(product) {
 

  if(cart.length===0){
    document.querySelector(".cart-item").style.color="white";
  }


  for(let i=0;i<product.length;i++){

   
   if(product[i].category=="men's clothing")
   {
    
   
     document.querySelector(".mens-cloth").innerHTML+=`
     <div class="item" id="${product[i].id}">
     <img style="height:200px; " src=${product[i].image} />
     <div class="info">
     <div class="title">${product[i].title}</div>
     <br>   
     <div class="row">
   
          <div class="price">Price: $${product[i].price}</div>
         
       </div>
        <br/>
       <div class="row">Rating:${product[i].rating.rate}</div>
     </div>
     <button onclick="clicked(${product[i].id})" class="cart-btn" id="addBtn${product[i].id}">Add to Cart</button>
   </div>
     `
   }
   else if(product[i].category=="women's clothing")
   {
     document.querySelector(".womens-cloth").innerHTML+=`
     <div class="item" id="${product[i].id}">
     <img style="height:200px; " src=${product[i].image} />
     <div class="info">
     <div class="title">${product[i].title}</div>
     <br>   
     <div class="row">
   
          <div class="price">Price: $${product[i].price}</div>
         
       </div>
        <br/>
       <div class="row">Rating:${product[i].rating.rate}</div>
     </div>
     <button onclick="clicked(${product[i].id})" class="cart-btn" id="addBtn${product[i].id}">Add to Cart</button>
   </div>
     `
   }
   else if(product[i].category=="jewelery")
   {
     document.querySelector(".jewellery").innerHTML+=`
     <div class="item" id="${product[i].id}">
     <img style="height:200px; " src=${product[i].image} />
     <div class="info">
     <div class="title">${product[i].title}</div>
     <br>   
     <div class="row">
   
          <div class="price">Price: $${product[i].price}</div>
         
       </div>
        <br/>
       <div class="row">Rating:${product[i].rating.rate}</div>
     </div>
     <button onclick="clicked(${product[i].id})" class="cart-btn" id="addBtn${product[i].id}">Add to Cart</button>
   </div>
     `
   }
   else if(product[i].category=="electronics"){
   
     document.querySelector(".electronics").innerHTML+=`
     <div class="item" id="${product[i].id}">
     <img style="height:200px; " src=${product[i].image} />
     <div class="info">
     <div class="title">${product[i].title}</div>
     <br>   
     <div class="row">
   
          <div class="price">Price: $${product[i].price}</div>
         
       </div>
        <br/>
       <div class="row">Rating:${product[i].rating.rate}</div>
     </div>
     <button onclick="clicked(${product[i].id})" class="cart-btn" id="addBtn${product[i].id}">Add to Cart</button>
   </div>
     `
 
   }
 
  
 }
  
}




//----------------------search




function showSearchedProduct(products, searchTerm) {

  const result = products.filter(item => {
    const nameMatches = item.title.toLowerCase().includes(searchTerm.toLowerCase());
   
    return nameMatches;
  });
console.log(result);
  showProduct(result)
   
}

const searchInput = document.querySelector('.search');
searchInput.addEventListener('input', () => {

  document.querySelector(".mens-cloth").innerHTML="";
  document.querySelector(".womens-cloth").innerHTML="";
  document.querySelector(".jewellery").innerHTML=""
  document.querySelector(".electronics").innerHTML=""
  showSearchedProduct(product, searchInput.value);
  });


document.querySelector(".filter-all").addEventListener("click",()=>{
  document.querySelector(".filter-all").style.backgroundColor="black"
  document.querySelector(".filter-all").style.color="white"

  document.querySelector(".filter-men").style.backgroundColor="white"
  document.querySelector(".filter-men").style.color="black"

  document.querySelector(".filter-women").style.backgroundColor="white"
  document.querySelector(".filter-women").style.color="black"

  document.querySelector(".filter-jewellery").style.backgroundColor="white"
  document.querySelector(".filter-jewellery").style.color="black"

  document.querySelector(".filter-electronic").style.backgroundColor="white"
  document.querySelector(".filter-electronic").style.color="black"

  document.querySelector(".mens-cloth").style.display="flex"
  document.querySelector(".womens-cloth").style.display="flex"
  document.querySelector(".jewellery").style.display="flex"
  document.querySelector(".electronics").style.display="flex"
})




document.querySelector(".filter-men").addEventListener("click",()=>{


  document.querySelector(".filter-all").style.backgroundColor="white"
  document.querySelector(".filter-all").style.color="black"

  document.querySelector(".filter-men").style.backgroundColor="black"
  document.querySelector(".filter-men").style.color="white"

  document.querySelector(".filter-women").style.backgroundColor="white"
  document.querySelector(".filter-women").style.color="black"

  document.querySelector(".filter-jewellery").style.backgroundColor="white"
  document.querySelector(".filter-jewellery").style.color="black"

  document.querySelector(".filter-electronic").style.backgroundColor="white"
  document.querySelector(".filter-electronic").style.color="black"


  document.querySelector(".mens-cloth").style.display="flex"
  document.querySelector(".womens-cloth").style.display="none"
  document.querySelector(".jewellery").style.display="none"
  document.querySelector(".electronics").style.display="none"
})

document.querySelector(".filter-women").addEventListener("click",()=>{
 


  document.querySelector(".filter-all").style.backgroundColor="white"
  document.querySelector(".filter-all").style.color="black"

  document.querySelector(".filter-men").style.backgroundColor="white"
  document.querySelector(".filter-men").style.color="black"

  document.querySelector(".filter-women").style.backgroundColor="black"
  document.querySelector(".filter-women").style.color="white"

  document.querySelector(".filter-jewellery").style.backgroundColor="white"
  document.querySelector(".filter-jewellery").style.color="black"

  document.querySelector(".filter-electronic").style.backgroundColor="white"
  document.querySelector(".filter-electronic").style.color="black"





    document.querySelector(".mens-cloth").style.display="none"
    document.querySelector(".womens-cloth").style.display="flex"
    document.querySelector(".jewellery").style.display="none"
    document.querySelector(".electronics").style.display="none"
  })

  document.querySelector(".filter-jewellery").addEventListener("click",()=>{
  

    document.querySelector(".filter-all").style.backgroundColor="white"
    document.querySelector(".filter-all").style.color="black"
  
    document.querySelector(".filter-men").style.backgroundColor="white"
    document.querySelector(".filter-men").style.color="black"
  
    document.querySelector(".filter-women").style.backgroundColor="white"
    document.querySelector(".filter-women").style.color="black"
  
    document.querySelector(".filter-jewellery").style.backgroundColor="black"
    document.querySelector(".filter-jewellery").style.color="white"
  
    document.querySelector(".filter-electronic").style.backgroundColor="white"
    document.querySelector(".filter-electronic").style.color="black"
  



      document.querySelector(".mens-cloth").style.display="none"
      document.querySelector(".womens-cloth").style.display="none"
      document.querySelector(".jewellery").style.display="flex"
      document.querySelector(".electronics").style.display="none"
    })

    document.querySelector(".filter-electronic").addEventListener("click",()=>{
     
      document.querySelector(".filter-all").style.backgroundColor="white"
      document.querySelector(".filter-all").style.color="black"
    
      document.querySelector(".filter-men").style.backgroundColor="white"
      document.querySelector(".filter-men").style.color="black"
    
      document.querySelector(".filter-women").style.backgroundColor="white"
      document.querySelector(".filter-women").style.color="black"
    
      document.querySelector(".filter-jewellery").style.backgroundColor="white"
      document.querySelector(".filter-jewellery").style.color="black"
    
      document.querySelector(".filter-electronic").style.backgroundColor="black"
      document.querySelector(".filter-electronic").style.color="white"
    




        document.querySelector(".mens-cloth").style.display="none"
        document.querySelector(".womens-cloth").style.display="none"
        document.querySelector(".jewellery").style.display="none"
        document.querySelector(".electronics").style.display="flex"
      })
  
