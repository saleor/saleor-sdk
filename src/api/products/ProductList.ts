// import { ApolloQueryResult } from "apollo-client";
import BaseList, {
  GetPageInfo,
  GetTotalCount,
  MapQueryData,
} from "../../helpers/BaseList";
import {
  ProductList as ProductListQuery,
  ProductListVariables,
  ProductList_products_edges_node,
} from "../../queries/gqlTypes/ProductList";
import { productList } from "../../queries/products";

export class ProductList extends BaseList<
  ProductListQuery,
  ProductList_products_edges_node,
  ProductListVariables
> {
  getPageInfo: GetPageInfo<ProductListQuery> = result =>
    result.data.products?.pageInfo!;

  getTotalCount: GetTotalCount<ProductListQuery> = result =>
    result.data.products?.totalCount!;

  mapQueryData: MapQueryData<
    ProductListQuery,
    ProductList_products_edges_node
  > = data => data.products?.edges.map(({ node }) => node);

  query = async (variables: ProductListVariables) =>
    this.client!.query<ProductListQuery, ProductListVariables>({
      query: productList,
      variables,
    });

  // query = async (variables: ProductListVariables) =>
  //   new Promise<ApolloQueryResult<ProductListQuery>>((resolve, reject) => {
  //     const observableQuery = this.client!.watchQuery<
  //       ProductListQuery,
  //       ProductListVariables
  //     >({
  //       query: productList,
  //       variables,
  //     });

  //     observableQuery.subscribe({
  //       error: e => reject(e),
  //       next: result => {
  //         console.log(result);

  //         resolve(result);
  //       },
  //     });
  //     // .unsubscribe();
  //   });
}
