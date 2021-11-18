import { product } from "./product.js";

const searchProducts = () => {
  const divHeadingEle = document.querySelector("#heading");
  console.log(divHeadingEle);

  const divSearch = document.createElement("div");
  divSearch.id = "search";

  const iconSearch = document.createElement("img");
  iconSearch.src = "src/assets/images/icon/search.png";
  iconSearch.id = "iconSearch";
  divSearch.appendChild(iconSearch);
  iconSearch.onclick = showAndHide;

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "searchText";
  divSearch.appendChild(searchInput);

  const searchButton = document.createElement("BUTTON");
  searchButton.id = "searchButton";
  divSearch.appendChild(searchButton);
  searchButton.textContent = "SEARCH";
  searchButton.onclick = searching;

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
};

const searching = () => {
  var word = document.getElementById("searchText");
  var filter = word.value.toUpperCase();
  for (let s in product) {
    for (var j = 0; j < product[s].productName.length; j++) {
      if (product[s].productName.toUpperCase().indexOf(filter) > -1) {
        document.getElementById(product[s].productId).style.display = "";
      } else {
        document.getElementById(product[s].productId).style.display = "none";
      }
    }
  }
};

export { searchProducts, showAndHide };
