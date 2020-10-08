import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";
import {
  ProductDetails as ProductDetailsQuery,
  ProductDetailsVariables,
} from "../../queries/gqlTypes/ProductDetails";
import { ProductDetails as Product } from "../../fragments/gqlTypes/ProductDetails";
import { productDetails } from "../../queries/products";

export class ProductDetails extends BaseDetails<
  ProductDetailsQuery,
  Product,
  ProductDetailsVariables
> {
  mapQueryData: MapQueryData<ProductDetailsQuery, Product> = data =>
    data.product || undefined;

  query = (variables: ProductDetailsVariables) =>
    this.client!.query<ProductDetailsQuery, ProductDetailsVariables>({
      query: productDetails,
      variables,
    });
}
