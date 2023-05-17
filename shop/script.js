let cart=[]
let randomColor=[];
let product;
let color=["red","blue","green","black","yellow"]
let randomSize=[]
let size=["S","M","L","X","XL"]
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
 localStorage.setItem("currentUser",JSON.stringify(currentUser))
}




// ------------------showproduct
function  showProduct(product) {
 
  for(let i=0;i<product.length;i++){

    randomColor[0] = color[Math.floor(Math.random() * color.length)];
    randomColor[1] = color[Math.floor(Math.random() * color.length)];
    randomColor[2] = color[Math.floor(Math.random() * color.length)];
    randomSize[0]=  size[Math.floor(Math.random() * size.length)];
    randomSize[1]=  size[Math.floor(Math.random() * size.length)];
    randomSize[2]=  size[Math.floor(Math.random() * size.length)];
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
         <div class="sized">Size:${randomSize[0]},${randomSize[1]},${randomSize[2]}</div>
       </div>
       <div class="colors">
         Colors:
         <div class="row">
           <div class="circle" style="background-color:${randomColor[0]}"></div>
           <div class="circle" style="background-color:${randomColor[1]}"></div>
           <div class="circle" style="background-color: ${randomColor[2]}"></div>
         </div>
       </div>
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
         <div class="sized">Size: ${randomSize[0]},${randomSize[1]},${randomSize[2]}</div>
       </div>
       <div class="colors">
         Colors:
         <div class="row">
           <div class="circle" style="background-color: ${randomColor[0]}"></div>
           <div class="circle" style="background-color: ${randomColor[1]}"></div>
           <div class="circle" style="background-color: ${randomColor[2]}"></div>
         </div>
       </div>
       <div class="row">Rating:${product[i].rating.rate}</div>
     </div>
     <button class="cart-btn" onclick="clicked(${product[i].id})" id="addBtn${product[i].id}">Add to Cart</button>
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
         <div class="sized">Size: ${randomSize[0]},${randomSize[1]},${randomSize[2]}</div>
       </div>
       <div class="colors">
         Colors:
         <div class="row">
           <div class="circle" style="background-color: ${randomColor[0]}"></div>
           <div class="circle" style="background-color: ${randomColor[1]}"></div>
           <div class="circle" style="background-color:${randomColor[2]}"></div>
         </div>
       </div>
       <div class="row">Rating:${product[i].rating.rate}</div>
     </div>
     <button class="cart-btn" onclick="clicked(${product[i].id})" id="addBtn${product[i].id}">Add to Cart</button>
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
         <div class="sized">Size: ${randomSize[0]},${randomSize[1]},${randomSize[2]}</div>
       </div>
       <div class="colors">
         Colors:
         <div class="row">
           <div class="circle" style="background-color:${randomColor[0]}"></div>
           <div class="circle" style="background-color: ${randomColor[1]}"></div>
           <div class="circle" style="background-color: ${randomColor[2]}"></div>
         </div>
       </div>
       <div class="row">Rating:${product[i].rating.rate}</div>
     </div>
     <button class="cart-btn" onclick="clicked(${product[i].id})" id="addBtn${product[i].id}">Add to Cart</button>
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
  

      if(cart!=[]){
        document.querySelector(".cart-item").style.color="red";
      }