import { ProductList } from "../../api/products/ProductList";
import { makeList } from "./utils";

export const useProductList = makeList(client => new ProductList(client));
