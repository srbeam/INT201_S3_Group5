import { product } from "./product.js";

let searchingfun = {

 showAndHide : () => {
  let searchicon = document.getElementById("searchButton");
  let searchText = document.getElementById("searchText");
  if (searchicon.style.display === "none" && searchText.style.display === "none") {
    searchicon.style.display = "block";
    y.style.display = "block";
  } else {
    searchicon.style.display = "none";
    searchText.style.display = "none";
  }
}
,
 searching : () => {
  const word = document.getElementById("searchText");
  const filter = word.value.toUpperCase();
  for (let s in product) {    
    for (var j = 0; j < product[s].productName.length; j++) {
      if (product[s].productName.toUpperCase().indexOf(filter) > -1) {
        document.getElementById(product[s].productId).style.display = "";
      } else {
        document.getElementById(product[s].productId).style.display = "none";
      }
    }
  }
}
}

const searchProducts = () => {
  iconSearch.addEventListener("click", searchingfun.showAndHide);
  searchButton.addEventListener("click", searchingfun.searching);
};

export { searchProducts };
