let currentUser=JSON.parse(localStorage.getItem("currentUser"))
let product=currentUser.cart
let total=0
console.log(product);
  
showProducts(product);

 function showProducts(product){
  
  total=0
  document.querySelector(".product-section").innerHTML=''
  for(let i=0;i<product.length;i++){

    document.querySelector(".product-section").innerHTML+=`
    <div class="item" id="${product[i].id}">
    <img style="height:200px; " src=${product[i].image} />
    <div class="info">
    <div class="title">${product[i].title}</div>
    <br>   
    <div class="row">
  
         <div class="price">Price: $${product[i].price}</div>
        <div class="sized">Size: S,M,L,X,XL</div>
      </div>
      <div class="colors">
        Colors:
        <div class="row">
          <div class="circle" style="background-color:black"></div>
          <div class="circle" style="background-color:blue"></div>
          <div class="circle" style="background-color:green"></div>
        </div>
      </div>
      <div class="row">Rating:${product[i].rating.rate}</div>
    </div>
    <button onclick="clicked(${i})" class="cart-btn" >Remove From Cart</button>
  </div>
    
    
    `
}
document.querySelector(".checkout").innerHTML=""
for(let i=0;i<product.length;i++){
  document.querySelector(".checkout").innerHTML+=`
  <div class="each-product" id="${product[i].id}">
  <div>${i+1}.${product[i].title}</div>
  <div>$${product[i].price}</div>
  </div>
  <br>
  
  
  `
}


for(let i=0;i<product.length;i++){
  total+=product[i].price
  }
  total=total.toFixed(2)

  
  document.querySelector(".checkout").innerHTML+=`
  <div class"total">
  <div>------------------------------------------------</div>
  <div class="total-box">
  <span>Total</span>
  <span>$${total}</span>
  </div>
  <div>------------------------------------------------</div>
  <button onclick="razerpay()" style="background-color: white; color: black;">Click To Checkout</button>
  </div>
  `
  localStorage.setItem("total",JSON.stringify(total))

}





function razerpay() {
  location.assign("../razorpay/index.html")
}


 function clicked(id){

console.log(id)
console.log(product.splice(id,1))
console.log(product)


   showProducts(product)

 }