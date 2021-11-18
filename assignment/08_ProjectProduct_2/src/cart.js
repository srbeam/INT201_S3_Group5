import { product } from "./product.js";
import { productcart, amountInCart } from "./addproduct.js";
import { CookieUtil } from "./cookie.js";

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
  pCart.textContent = "cart : " + amountInCart();
  divProductcart.appendChild(pCart);

  const iconremove = document.createElement("img");
  iconremove.src = "src/assets/images/icon/bin.png";
  iconremove.id = "removeall";
  divProductcart.appendChild(iconremove);
  iconremove.onclick = removeall;
};

function removeModal() {
  for (let pt in productcart) {
    const Test10 = document.getElementById("idforcart" + pt);
    Test10.remove();
  }
}

function createModal() {
  const test1 = document.querySelector(".modal");
  const test2 = test1.querySelector(".modal-content");
  for (let p in productcart) {
    const Test3 = document.createElement("p");
    Test3.setAttribute("id", "idforcart" + p);
    test2.appendChild(Test3);
  }
}

function displayCarts() {
  if (productcart.length === 0) {
    alert("This cart empty!!");
  } else {
    createModal();
    ///
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      removeModal();
      modal.style.display = "none";
    };
    modal.style.display = "block";
    document.getElementById("totalPrice").innerHTML = "totalPrice : " + totalPrice();

    for (let p1 in productcart) {
      const idy = document.getElementById("idforcart" + p1);
      idy.innerHTML =
        "Product Name: " +
        productcart[p1].name +
        " Amount : " +
        productcart[p1].amount;

      const rButton1 = document.createElement("BUTTON");
      rButton1.id = "removeButton" + p1;
      idy.appendChild(rButton1);
      rButton1.textContent = "remove";

      const bb = document.getElementById("removeButton" + p1);
      bb.addEventListener("click", () => {
        for (let idp in product) {
          if (productcart[p1].id === product[idp].productId) {
            document.getElementById("p" + product[idp].productId).innerHTML =
              "Total : " + ++product[idp].total + " piece";
          }
        }
        if (productcart[p1].amount > 1) {
          idy.innerHTML =
            "Product Name: " +
            productcart[p1].name +
            " Amount : " +
            --productcart[p1].amount;

          idy.appendChild(rButton1);

        } else {
          alert(
            "remove productId " +
              productcart[p1].id +
              ", productname " +
              productcart[p1].name
          );
          removeModal();
          productcart.splice(p1, 1);
 
          modal.style.display = "none";
        }
        document.getElementById("totalPrice").innerHTML = "totalPrice : " + totalPrice();
        document.getElementById("cart").innerHTML = "cart : " + amountInCart();
      });
    }

  }
}

const totalPrice = () => {
  let initialValue = 0;
  let total = productcart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.amount,
    initialValue
  );
  return total;
};

const removeall = () => {
  for (let h1 in productcart) {
    for (let h2 in product) {
  if(productcart[h1].id === product[h2].productId){
    product[h2].total = productcart[h1].amount + product[h2].total;
      document.getElementById("p" + product[h2].productId).innerHTML =
        "Total : " + product[h2].total + " piece";
       
      }
    }
    }
    document.getElementById("cart").innerHTML = "cart : " + 0;
    alert('Remove All')
    while(productcart.length > 0) {
      productcart.pop();
  }
 
  CookieUtil.unset("cart");
  }








export { cart, createModal ,displayCarts};

