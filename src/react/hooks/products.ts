import { ProductDetails } from "../../api/products/ProductDetails";
import { ProductList } from "../../api/products/ProductList";
import { makeDetails, makeList } from "./utils";

export const useProductList = makeList(client => new ProductList(client));
export const useProductDetails = makeDetails(
  client => new ProductDetails(client)
);
