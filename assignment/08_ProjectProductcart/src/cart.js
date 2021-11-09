let productcart = [];

const cart = () => {
  const divHeadingEle = document.querySelector("#heading");
  console.log(divHeadingEle);

  const divProductcart = document.createElement("div");
  divProductcart.id = "divCart";
  divHeadingEle.appendChild(divProductcart);

  const iconCart = document.createElement("img");
  iconCart.src = "src/assets/images/icon/cart.png";
  iconCart.id = "iconCart";
  divProductcart.appendChild(iconCart);
  iconCart.onclick = displayCarts;

  const pCart = document.createElement("p");
  pCart.id = "cart";
  pCart.textContent = "cart : " + 0;
  divProductcart.appendChild(pCart);
};

function displayCarts() {
  if (productcart.length == 0) {
    swal("This cart empty!!");
  } else {
    let box = [];
    for (let k in productcart) {
      box[k] =
        "Product Name: " +
        productcart[k].name +
        " Amount : " +
        productcart[k].amount +
        "\n";
    }
    swal(box + "Total price: " + totalPrice());
  }
}

const totalPrice = () => {
  let total = 0;
  for (let p in productcart) {
    total += productcart[p].price * productcart[p].amount;
  }
  return total;
};

export { productcart, cart };
