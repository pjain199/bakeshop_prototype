
// function passValue(){
//   var selectInfo = document.getElementById("glaze").value;
//   localStorage.setItem("glazeValue", selectInfo);

//   var selectAmountInfo = document.getElementById("buns").value;
//   localStorage.setItem("amountValue", selectAmountInfo);

//   return true;

// }

// // var shoppingCart = (function() {
// //   cart = [];

//   // function Item(name, amount, count) {
//   //   this.name = function(){
//   //     return document.getElementsByClassName("flavor");
//   //   };
//   //   this.amount = function(){
//   //     passValue();
//   //   };
//   //   this.count = count;
//   // }


  




// //contructor
//   function Item(name, amount, count) {
//     this.name = name;
//     this.amount = amount;
//     this.count = count;
//   }

//   var item = new Item (document.getElementsByClassName("flavor"), passValue(), count);

//   var cart = []; 

  

//   cart.push(item);

//   function saveCart() {
//     localStorage.setItem('shoppingCart', JSON.stringify(cart));
//   }
  
//     // Load cart
//   function loadCart() {
//     cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
//   }





// }

// document.getElementById("result").innerHTML = localStorage.getItem("glazeValue");



// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   // slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// var modal = document.getElementById('productDetailsModal');
// var originalPic = document.getElementById('originalFlavor');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// originalPic.addEventListener('click', openModal);

// const addToCartButton = document.getElementById("add-to-cart");

// function Item(name, glaze, amount) {
//   this.name = name;
//   this.glaze = glaze;
//   this.amount = amount;
// }

// while(addToCartButton){
//   var clicked = false;
//   addToCartButton.addEventListener("click", function() {
//     clicked = true;
//   }​
//  if (clicked===true){
//   var item1 = new Item("h1", (document.querySelector('#glaze')).value, (document.querySelector('#buns')).value);
//   sessionStorage.setItem('shoppingCart', JSON.stringify(item1));
//   console.log(JSON.parse(sessionStorage.getItem('shoppingCart')));
//  }

// }


// function get() {
//   console.log(JSON.parse(sessionStorage.getItem('shoppingCart')));
// }





// var item1 = new Item("h1", document.querySelector('#glaze'), document.querySelector('#buns'));
// sessionStorage.setItem('shoppingCart', JSON.stringify(item1));
// console.log(JSON.parse(sessionStorage.getItem('shoppingCart')));


// closeBtn.addEventListener('click', closeModal);

// var cartInfo = [];

// const cartItem = {
//   name = document.getElementById('productName').innerHTML,
//   glaze = document.getElementById("glaze").value,
//   amount = document.getElementById("buns").value
// };

// const item = Object.create(cartItem);
// cartInfo.push(item);
// console.log(cartInfo);

function openModal(productProperties){
  var modal = document.getElementById('productDetailsModal');
  document.getElementById('productName').innerHTML = productProperties.name;
  modal.style.display='block';

}

function closeModal(){
  var modal = document.getElementById('productDetailsModal');
  modal.style.display='none';

}

//confused with saving cart number to next page
// let count = 0;


// <div class = item>
// <img class = "cartImg" src="source/bun.svg" alt="product picture in cart">
// <h3 class = 'itemHeading'>Original</h3>
// <p class = 'details'>Topping: Vanilla Glaze <br> </br>Amount: 3 buns <br> </br> Price: $15.00 </p>
// <p class = 'remove'>Remove</p>
// </div>

function Load(){
let cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
// console.log("cartInfo in Load " + JSON.stringify(cartInfo))

for (var i = 0; i < cartInfo.length; i++) {
  var cartInfoItem = cartInfo[i]
  var cartInfoItemDiv = document.createElement("div")
  document.getElementById('counter-display').innerHTML = cartInfo.length;
  // var cartNumber = document.getElementById('counter-display').innerHTML
  cartInfoItemDiv.classList.add("item")
  var cartInfoItemImage = document.createElement("img")
  cartInfoItemImage.src = "source/bun.svg"
  cartInfoItemImage.classList.add("cartImg")
// figure out how to add alt text attribute
  var cartInfoItemTitle = document.createElement("h3")
  cartInfoItemTitle.classList.add("itemHeading")
  cartInfoItemTitle.innerText = cartInfoItem["flavor"]
  var cartInfoItemTopping = document.createElement("p")
  cartInfoItemTopping.classList.add("details")
  cartInfoItemTopping.innerHTML = "Topping: " + cartInfoItem["glaze"] + "<br> </br>Amount: " + cartInfoItem["amount"] + "<br></br>Price: $15.00"
  var cartInfoItemRemove = document.createElement("p")
  cartInfoItemRemove.classList.add("remove")
  cartInfoItemRemove.innerText = "Remove"

  cartInfoItemDiv.appendChild(cartInfoItemImage)
  cartInfoItemDiv.appendChild(cartInfoItemTitle)
  cartInfoItemDiv.appendChild(cartInfoItemTopping)
  cartInfoItemDiv.appendChild(cartInfoItemRemove)
  

  var attachmentNode = document.getElementById("cart-items")
  attachmentNode.appendChild(cartInfoItemDiv)


  cartInfoItemRemove.onclick = (function (cartInfoItem,cartInfoItemDiv) {
    return function() {
      removeItem(cartInfoItem)

      cartInfoItemDiv.parentNode.removeChild(cartInfoItemDiv)
      // cartNumber = cartNumber - 1;
      // document.getElementById('counter-display').innerHTML = cartInfo.length;

      console.log(cartInfo);
      console.log(cartInfo.length)

    }
    // document.getElementById('counter-display').innerHTML = cartInfo.length;

   }(cartInfoItem, cartInfoItemDiv))






  //click on remove text to remove object in array
 
  // attachmentNode.appendChild()
}


// document.getElementById('counter-display').innerHTML = cartInfo.length;


}

function increaseCounter(counter){
  counter++;
  localStorage.setItem("cartCount", counter);
  document.getElementById('counter-display').innerHTML = counter;
}

//removes item
function removeItem(obj) {
  // retrieve the stored value of the cart items so that we can modify it
  var cartItemsString = localStorage.getItem("cartInfo")
  if (cartItemsString !== null) {
    var cartInfo = JSON.parse(cartItemsString) // successfully loaded in the cart items
    
    // find the index of the input object in the list
    var ind = cartInfo.findIndex(function (item) {
      return obj.flavor === item.flavor && item.glaze === obj.glaze && item.amount === obj.amount
    })
    console.log("ind " + ind)
    if (ind !== -1) {
      // remove item from the list
      cartInfo.splice(ind, 1)
      // update the stored value
      localStorage.setItem("cartInfo", JSON.stringify(cartInfo))
      // re-render the page to reflect changes
      // Load()
    }
  }
  document.getElementById('counter-display').innerHTML = cartInfo.length;

}




// console.log(cartItem);

function addToCart(){
  let cartInfo = [];
  if(localStorage.getItem("cartInfo") === null){
    cartInfo = [];
  }
  else{
    cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
  }
  const cartItem = {
    flavor : document.getElementById('productName').innerHTML,
    glaze : document.getElementById("glaze").value,
    amount : document.getElementById("buns").value
  };
  const item = Object.create(cartItem);
  cartInfo.push(cartItem);
  console.log(cartInfo);

  localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
  document.getElementById('counter-display').innerHTML = cartInfo.length;

}
  //is this right? for loop maybe?
  // for every item in Array
  // print onto cart page
  // onclick remove function (remove by id or index?)

  // document.getElementById('cart-array').innerHTML = cartInfo;

//   for (var i = 0; i < cartInfo.length; i++) {
//     var added = cartInfo[i];
//     var itemNode = document.createElement("li");
//     itemNode.innerText = added.flavor + added.glaze + " (" + added.amount + ")";
// }


// localStorage.setItem("myItem", JSON.stringify(cartItem));

JSON.parse(localStorage.getItem("cartInfo")); //where does this go?





