import { product } from "./product.js";

let cart = 0;

function productList(){

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
  
    const pButton = document.createElement("BUTTON");
    pButton.className = "addButton";
    divProduct.appendChild(pButton);
    pButton.textContent = "ADD";
    


    divProductsEle.appendChild(divProduct);
  }
  
}


const searchProducts = () => {

  const divSearch = document.createElement("div");
  divSearch.id = "search";
  //iconsearch
  const iconSearch = document.createElement("img");
  iconSearch.src = "src/assets/images/icon/search.png"
  iconSearch.id = "iconSearch";
  divSearch.appendChild(iconSearch);

  //ช่อง search งุงิ
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "searchText"
  divSearch.appendChild(searchInput);

  //Button น้าอิอิ
  const searchButton = document.createElement("BUTTON");
  searchButton.id = "searchButton";
  divSearch.appendChild(searchButton);
  searchButton.textContent = "SEARCH";

  divHeadingEle.appendChild(divSearch);
};

const showAndHide = () => {
  var x = document.getElementById("searchButton");
  var y = document.getElementById("searchText");
  if (x.style.display === "none" && y.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}

const cartfun = () => {
    const divProductcart = document.createElement("div");
    divProductcart.id = "cart";
    divProductcart.textContent = "cart : " + cart;
    divHeadingEle.appendChild(divProductcart)
}


const divHeadingEle = document.querySelector("#heading");
console.log(divHeadingEle);
cartfun();
searchProducts();


const btn = document.getElementById('iconSearch');
btn.onclick = showAndHide;


const divProductsEle = document.querySelector("#products");
console.log(divProductsEle);
productList();

const bn = document.getElementById("addButton");
bn.onclick = () => {
  cart++
}  

