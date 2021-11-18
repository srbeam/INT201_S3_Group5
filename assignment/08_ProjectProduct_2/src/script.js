import { productList } from "./productlist.js";
import { searchProducts } from "./search.js";
import { cart} from "./cart.js";
import { addp } from "./addproduct.js";
import { sStorage } from "./storage.js";


sStorage();
cart();
searchProducts();
productList();
addp();