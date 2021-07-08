import { useContext } from "react";
import { SaleorContext } from "../context";
import { DocumentNode, QueryResult, useQuery } from "@apollo/client";

const useSaleorStateHook = (query: DocumentNode): QueryResult => {
  const saleor = useContext(SaleorContext);

  if (!saleor) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  return useQuery(query, {
    client: saleor.client,
    fetchPolicy: "cache-only",
  });
};

export const hookStateFactory = (query: DocumentNode) => (): QueryResult =>
  useSaleorStateHook(query);
