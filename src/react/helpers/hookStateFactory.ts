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

  const token = localStorage?.getItem("token");

  return useQuery(query, {
    client: saleor.client,
    fetchPolicy: "cache-only",
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    },
  });
};

export const hookStateFactory = (query: DocumentNode) => () =>
  useSaleorStateHook(query);
