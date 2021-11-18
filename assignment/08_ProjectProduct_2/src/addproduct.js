import { CookieUtil } from "./cookie.js";
import { product } from "./product.js";
import {addToCookie} from "./cookie.js"


let productcart = [];

productcart = JSON.parse(CookieUtil.get('cart')) || [];

function addp() {
  for (let n in product) {
    const bt = document.getElementById(product[n].productId);
    const bf = bt.querySelector("Button");
    bf.addEventListener(
      "click",
      () => {
        if (product[n].total !== 0) {
          for (let m in productcart) {
            if (productcart[m].id === product[n].productId) {
              productcart[m].amount = productcart[m].amount + 1;
         
              document.getElementById("cart").innerHTML =
                "cart : " + amountInCart();

                addToCookie();
              if (product[n].total > 0) {
                document.getElementById("p" + product[n].productId).innerHTML =
                  "Total : " + --product[n].total + " piece";
              }
              return;
            }
          }

          productcart.push({
            id: product[n].productId,
            name: product[n].productName,
            price: product[n].price,
            amount: 1
          });
          
          document.getElementById("cart").innerHTML =
            "cart : " + amountInCart();
          if (product[n].total > 0) {
            document.getElementById("p" + product[n].productId).innerHTML =
              "Total : " + --product[n].total + " piece";
            alert(product[n].productId + " add to cart");
          }
          addToCookie();
        } else {
          alert("Can not add this product!!");
        }
      },
      true
    );
  }

}

let amountInCart = () => {
  let initialValue = 0;
  let sum = productcart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    initialValue
  );
  return sum;
};



export { productcart, addp, amountInCart };
