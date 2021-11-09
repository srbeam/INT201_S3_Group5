import { productList } from "./productlist.js";
import { searchProducts } from "./search.js";
import { productcart, cart } from "./cart.js";
import { product } from "./product.js";

cart();
searchProducts();
productList();

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
        document.getElementById("cart").innerHTML = "cart : " + amountInCart();

        if (product[n].total > 0) {
          document.getElementById("p" + product[n].productId).innerHTML =
            "Total : " + --product[n].total + " piece";
          swal(product[n].productId + " add to cart");
        }
      } else {
        swal("Can not add this product!!");
      }
    },
    true
  );
}

let amountInCart = () => {
  let sum = 0;
  for (var a = 0; a < productcart.length; a++) {
    sum += productcart[a].amount;
  }
  return sum;
};
