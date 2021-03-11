import {
  ApolloClient,
  ObservableQuery,
  WatchQueryOptions as ApolloQueryOptions,
} from "apollo-client";

import { RequireOnlyOne } from "../tsHelpers";
import * as AttributesList from "./attributes";
import * as Collections from "./collections";
import * as Orders from "./orders";
import * as Product from "./products";
import * as Shop from "./shop";

import { OrderByToken, OrderByTokenVariables } from "./gqlTypes/OrderByToken";
import {
  UserOrderByToken,
  UserOrderByTokenVariables,
} from "./gqlTypes/UserOrderByToken";

import { Attributes, AttributesVariables } from "./gqlTypes/Attributes";

import { GetShop } from "./gqlTypes/GetShop";

import { OrdersByUser, OrdersByUserVariables } from "./gqlTypes/OrdersByUser";
import {
  VariantsProducts,
  VariantsProductsVariables,
} from "./gqlTypes/VariantsProducts";
import {
  CollectionListVariables,
  CollectionList,
} from "./gqlTypes/CollectionList";

type QueryOptions<T = {}> = T extends { [n: string]: never }
  ? Omit<ApolloQueryOptions<{}>, "query">
  : RequireOnlyOne<Omit<ApolloQueryOptions<T>, "query">, "variables">;

// TODO: Add ability to pass custom fragments to queries
export const QUERIES = {
  Attributes: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: QueryOptions<AttributesVariables>
  ): ObservableQuery<Attributes, any> =>
    client.watchQuery({
      query: AttributesList.attributes,
      ...options,
    }),
  CollectionList: (
    client: ApolloClient<any>,
    options: QueryOptions<CollectionListVariables>
  ): ObservableQuery<CollectionList, any> =>
    client.watchQuery({
      query: Collections.collections,
      ...options,
    }),
  GetShopDetails: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: QueryOptions<null>
  ): ObservableQuery<GetShop, any> =>
    client.watchQuery({
      query: Shop.getShop,
      ...options,
    }),
  OrderDetails: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: QueryOptions<OrderByTokenVariables>
  ): ObservableQuery<OrderByToken, any> =>
    client.watchQuery({
      query: Orders.orderDetailsByTokenQuery,
      ...options,
    }),
  OrderDetailsByUser: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: QueryOptions<UserOrderByTokenVariables>
  ): ObservableQuery<UserOrderByToken, any> =>
    client.watchQuery({
      query: Orders.userOrderDetailsByTokenQuery,
      ...options,
    }),
  OrdersByUser: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: QueryOptions<OrdersByUserVariables>
  ): ObservableQuery<OrdersByUser, any> =>
    client.watchQuery({
      query: Orders.ordersByUser,
      ...options,
    }),
  VariantsProducts: <TCacheShape>(
    client: ApolloClient<TCacheShape>,
    options: QueryOptions<VariantsProductsVariables>
  ): ObservableQuery<VariantsProducts, any> =>
    client.watchQuery({
      query: Product.variantsProducts,
      ...options,
    }),
};

export type QUERIES = typeof QUERIES;
