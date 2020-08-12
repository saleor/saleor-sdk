import ApolloClient from "apollo-client";
import {
  ProductList as ProductListQuery,
  ProductList_products_edges_node,
  ProductListVariables,
} from "../../queries/gqlTypes/ProductList";
import { WithList } from "../types";
import { ProductList } from "./ProductList";

export class ProductsAPI
  implements
    WithList<
      ProductListQuery,
      ProductList_products_edges_node,
      ProductListVariables
    > {
  client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  /**
   * Method returning list of products with ability to request next page
   * @param params List parameters
   */
  getList = (variables: ProductListVariables): ProductList => {
    const list = new ProductList(this.client);

    list.init(variables);

    return list;
  };
}
