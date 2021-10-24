
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


var cartInfo = [];
const cartItem = {
  // flavor = document.getElementById('productName').innerHTML,
  // glaze = document.getElementById("glaze").value,
  // amount = document.getElementById("buns").value
};

// console.log(cartItem);

function addToCart(){
const item = Object.create(cartItem);
cartInfo.push(item);
console.log(cartInfo);
}

let counterDisplay = document.querySelector('.counter-display');
let counterAdd = document.querySelector('addCart');

let count = 0;

updateDisplay();


  counterAdd.addEventListener("click",()=>{
    counter++;
    updateDisplay();

  });

  function updateDisplay(){
    counterDisplay.innerHTML = count;
};


// function bunSelection(name, glaze, amount) {
//   this.name = name;
//   this.glaze = glaze;
//   this.amount = amount;
// }

// var item1 = new bunSelection("CS1500", gradingareas, 85);

// function getGlazeOption() {
//   selectElement = document.querySelector('#glaze');  
//   glazeOutput = selectElement.value;

// }

// function getAmountOption() {
//   selectElement = document.querySelector('#buns');  
//   amountOutput = selectElement.value;
// }





// var shoppingCart = (function() {

//   cart = [];
  
//   // Constructor
//   function Item(name, glaze, amount) {
//     this.name = name;
//     this.glaze = glaze;
//     this.amount = amount;
//   }

//   var item1 = new Item("CS1500", (document.querySelector('#glaze')).value, (document.querySelector('#buns')));
  
//   // Save cart
//   function saveCart() {
//     sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
//   }
  
//     // Load cart
//   function loadCart() {
//     cart = JSON.parse(sessionStorage.getItem('shoppingCart')); //parses JSON
//   }
//   if (sessionStorage.getItem("shoppingCart") != null) {
//     loadCart();
//   }
  
//   var obj = {};
  
//   // Add to cart
//   obj.addItemToCart = function(name, glaze, amount, count) {
//     for(var item in cart) {
//       if(cart[item].name === name) {
//         cart[item].count ++;
//         saveCart();
//         return;
//       }
//     }
//     var item = new Item(name, glaze, amount, count);
//     cart.push(item);
//     saveCart();
//   }
//   // Set count from item
//   obj.setCountForItem = function(name, count) {
//     for(var i in cart) {
//       if (cart[i].name === name) {
//         cart[i].count = count;
//         break;
//       }
//     }
//   };
//   // Remove item from cart
//   obj.removeItemFromCart = function(name) {
//       for(var item in cart) {
//         if(cart[item].name === name) {
//           cart[item].count --;
//           if(cart[item].count === 0) {
//             cart.splice(item, 1);
//           }
//           break;
//         }
//     }
//     saveCart();
//   }

//   // Remove all items from cart
//   obj.removeItemFromCartAll = function(name) {
//     for(var item in cart) {
//       if(cart[item].name === name) {
//         cart.splice(item, 1);
//         break;
//       }
//     }
//     saveCart();
//   }

//   // Clear cart
//   obj.clearCart = function() {
//     cart = [];
//     saveCart();
//   }

//   // Count cart 
//   obj.totalCount = function() {
//     var totalCount = 0;
//     for(var item in cart) {
//       totalCount += cart[item].count;
//     }
//     return totalCount;
//   }

//   // Total cart
//   // obj.totalCart = function() {
//   //   var totalCart = 0;
//   //   for(var item in cart) {
//   //     totalCart += cart[item].price * cart[item].count;
//   //   }
//   //   return Number(totalCart.toFixed(2));
//   // }

//   // List cart
//   obj.listCart = function() {
//     var cartCopy = [];
//     for(i in cart) {
//       item = cart[i];
//       itemCopy = {};
//       for(p in item) {
//         itemCopy[p] = item[p];

//       }
//       itemCopy.total = Number(item.price * item.count).toFixed(2);
//       cartCopy.push(itemCopy)
//     }
//     return cartCopy;
//   }

//   // cart : Array
//   // Item : Object/Class
//   // addItemToCart : Function
//   // removeItemFromCart : Function
//   // removeItemFromCartAll : Function
//   // clearCart : Function
//   // countCart : Function
//   // totalCart : Function
//   // listCart : Function
//   // saveCart : Function
//   // loadCart : Function
//   return obj;
// })();


// // *****************************************
// // Triggers / Events
// // ***************************************** 
// // Add item
// $('.submit').click(function(event) {
//   event.preventDefault();
//   var name = $(this).data('name');
//   var glaze = $(this).data('glaze');
//   var amount = $(this).data('amount');
//   shoppingCart.addItemToCart(name, glaze, amount, 1);
//   displayCart();
// });

// // Clear items
// // $('.clear-cart').click(function() {
// //   shoppingCart.clearCart();
// //   displayCart();
// // });


// function displayCart() {
//   var cartArray = shoppingCart.listCart();
//   var output = "";
//   for(var i in cartArray) {
//     output += "<tr>"
//       + "<td>" + cartArray[i].name + "</td>" 
//       + "<td>(" + cartArray[i].price + ")</td>"
//       + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
//       + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//       + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
//       + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//       + " = " 
//       + "<td>" + cartArray[i].total + "</td>" 
//       +  "</tr>";
//   }
//   $('.show-cart').html(output);
//   $('.total-cart').html(shoppingCart.totalCart());
//   $('.total-count').html(shoppingCart.totalCount());
// }

// // Delete item button

// $('.show-cart').on("click", ".delete-item", function(event) {
//   var name = $(this).data('name')
//   shoppingCart.removeItemFromCartAll(name);
//   displayCart();
// })


// // -1
// $('.show-cart').on("click", ".minus-item", function(event) {
//   var name = $(this).data('name')
//   shoppingCart.removeItemFromCart(name);
//   displayCart();
// })
// // +1
// $('.show-cart').on("click", ".plus-item", function(event) {
//   var name = $(this).data('name')
//   shoppingCart.addItemToCart(name);
//   displayCart();
// })

// // Item count input
// $('.show-cart').on("change", ".item-count", function(event) {
//    var name = $(this).data('name');
//    var count = Number($(this).val());
//   shoppingCart.setCountForItem(name, count);
//   displayCart();
// });

// displayCart();

 
// cart notification thing
// export default function App() {
//   const [itemCount, setItemCount] = React.useState(1);
  
//   return (
//     <div style={{ display: "block", padding: 30 }}>
// =      <div>
//         <Badge color="secondary" badgeContent={itemCount}>
//           <ShoppingCartIcon />{" "}
//         </Badge>
//         <ButtonGroup>
//           <add-to-cart
//             onClick={() => {
//               setItemCount(Math.max(itemCount - 1, 0));
//             }}
//           >
//             {" "}
//             <RemoveIcon fontSize="small" />
//           </add-to-cart>
//           <Button
//             onClick={() => {
//               setItemCount(itemCount + 1);
//             }}
//           >
//             {" "}
//             <AddIcon fontSize="small" />
//           </Button>
//         </ButtonGroup>
//       </div>
//       console.log(done);
//     </div>
//   );
// }