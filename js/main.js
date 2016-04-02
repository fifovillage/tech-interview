var total = 0
document.getElementById("total").innerHTML = "0"

function addToCart(clickedId) {
  var itemsInCart = document.getElementById("items")
  var totalPrice = document.getElementById("total")
  var parentNode = document.getElementById(clickedId).parentElement.parentElement
  var itemName = parentNode.getElementsByTagName('h3')[0].innerHTML
  var price = parentNode.getElementsByClassName('price')[0].innerHTML

  if (itemsInCart.innerHTML == "empty") {
    itemsInCart.innerHTML = ""
  }

  price = price.replace('$', '')
  price = parseInt(price)
  total += price
  totalPrice.innerHTML = total
  itemsInCart.innerHTML = itemsInCart.innerHTML + "<p>" + itemName + " : $" + price + "</p>";
}
