import ApolloClient from "apollo-client";
import {
  ProductDetails as ProductDetailsQuery,
  ProductDetailsVariables,
} from "../../queries/gqlTypes/ProductDetails";
import { ProductDetails as ProductDetailsFragment } from "../../fragments/gqlTypes/ProductDetails";
import {
  ProductList as ProductListQuery,
  ProductList_products_edges_node,
  ProductListVariables,
} from "../../queries/gqlTypes/ProductList";
import { WithDetails, WithList } from "../types";
import { ProductDetails } from "./ProductDetails";
import { ProductList } from "./ProductList";

export class ProductsAPI
  implements
    WithDetails<
      ProductDetailsQuery,
      ProductDetailsFragment,
      ProductDetailsVariables
    >,
    WithList<
      ProductListQuery,
      ProductList_products_edges_node,
      ProductListVariables
    > {
  private client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  /**
   * Method returning product details
   * @param variables Details parameters
   */
  getDetails = async (variables: ProductDetailsVariables) => {
    const details = new ProductDetails(this.client);

    await details.init(variables);

    return details;
  };

  /**
   * Method returning list of products with ability to request next page
   * @param params List parameters
   */
  getList = async (variables: ProductListVariables) => {
    const list = new ProductList(this.client);

    await list.init(variables);

    return list;
  };
}
