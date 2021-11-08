var closeBtn = document.getElementsByClassName('closeBtn')[0];


function openModal(productProperties){
  var modal = document.getElementById('productDetailsModal');
  document.getElementById('productName').innerHTML = productProperties.name;
  modal.style.display='block';

}

function closeModal(){
  var modal = document.getElementById('productDetailsModal');
  modal.style.display='none';

}


function Load(){
let cartInfo = JSON.parse(localStorage.getItem("cartInfo"));
// console.log("cartInfo in Load " + JSON.stringify(cartInfo))

for (var i = 0; i < cartInfo.length; i++) {
  var cartInfoItem = cartInfo[i]
  var cartInfoItemDiv = document.createElement("div")
  document.getElementById('counter-display').innerHTML = cartInfo.length;
  cartInfoItemDiv.classList.add("item")
  var cartInfoItemImage = document.createElement("img")
  cartInfoItemImage.src = "source/bun.svg"
  cartInfoItemImage.classList.add("cartImg")
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

      // console.log(cartInfo);
      // console.log(cartInfo.length)

    }

   }(cartInfoItem, cartInfoItemDiv))


}


// document.getElementById('counter-display').innerHTML = cartInfo.length;


}

function increaseCounter(counter){
  counter++;
  localStorage.setItem("cartCount", counter);
  document.getElementById('counter-display').innerHTML = counter;
}

//removes item - adapted from Jesse's codepen
function removeItem (obj) {
 
  var cartItemsString = localStorage.getItem("cartInfo")
  if(cartItemsString !== null) {
    var cartInfo = JSON.parse(cartItemsString) 
    
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

JSON.parse(localStorage.getItem("cartInfo")); //where does this go?





