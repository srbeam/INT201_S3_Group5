import { product } from "./product.js";
const divProductsEle = document.querySelector("#products");
console.log(divProductsEle);

for (let num in product) {
  const divProduct = document.createElement("div");
  divProduct.setAttribute("id", product[num].productId);
  const productImg = document.createElement("img");
  productImg.src = product[num].img;
  divProduct.appendChild(productImg);
  const pProductid = document.createElement("p");
  pProductid.textContent = "Product ID : " + product[num].productId;
  divProduct.appendChild(pProductid);
  const pProductName = document.createElement("p");
  pProductName.textContent = "Product Name : " + product[num].productName;
  divProduct.appendChild(pProductName);
  const pProductDesc = document.createElement("p");
  pProductDesc.textContent = "Description : " + product[num].productDesc;
  divProduct.appendChild(pProductDesc);
  const pProductprice = document.createElement("p");
  pProductprice.textContent = "Price : " + product[num].price + " baht";
  divProduct.appendChild(pProductprice);
  const pProducttotal = document.createElement("p");
  pProducttotal.textContent = "Total : " + product[num].total + " piece";
  divProduct.appendChild(pProducttotal);

  divProductsEle.appendChild(divProduct);
}
