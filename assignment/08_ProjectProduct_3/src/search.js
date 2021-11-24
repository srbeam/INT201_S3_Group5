import { product } from "./product.js";

//เเก้ให้เก็บฟังก์ชันที่เกียวข้องกับ search ทั้งหมดเป็น object โดยใช้ชื่อว่า searchingfun
let searchingfun = {
  //ฟังก์ชันซ่อนเเละโชว์เเถบค้นหา
  showAndHide: () => {
    var x = document.getElementById("searchButton");
    var y = document.getElementById("searchText");
    if (x.style.display === "none" && y.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
  },
  //ฟังก์ชันสำหรับค้นหาสินค้า
  searching: () => {
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
  },
};

//ฟังก์ชันที่ไว้สั่งส่วนที่ไว้ติดต่อกับ user คือไอคอนค้นหา และปุ่มค้นหาสินค้า
const searchProducts = () => {
  iconSearch.addEventListener("click", searchingfun.showAndHide);
  searchButton.addEventListener("click", searchingfun.searching);
};

export { searchProducts };
