import { useContext } from "react";
import { SaleorContext } from "../context";
import { DocumentNode, QueryResult, useQuery } from "@apollo/client";

const CreateSaleorStateHook = <TData, TVariables>(
  query: DocumentNode
): QueryResult<TData, TVariables> => {
  const saleor = useContext(SaleorContext);

  if (!saleor) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  return useQuery<TData, TVariables>(query, {
    client: saleor.client,
    fetchPolicy: "cache-only",
  });
};

export const hookStateFactory = <TData, TVariables>(
  query: DocumentNode
): QueryResult<TData, TVariables> =>
  CreateSaleorStateHook<TData, TVariables>(query);
