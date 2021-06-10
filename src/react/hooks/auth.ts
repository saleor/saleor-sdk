import { QueryHookOptions, useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthSDK } from "../../core/auth";
import { SaleorContext } from "../context";
import { getUserDetailsQuery } from "../../apollo/queries";

export const useAuth = (): AuthSDK => {
  const saleor = useContext(SaleorContext);

  if (!saleor) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  return saleor.api.auth;
};

export const useAuthState = (options?: QueryHookOptions<any, never>) => {
  const saleor = useContext(SaleorContext);

  if (!saleor) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  const token = localStorage?.getItem("token");

  return useQuery(getUserDetailsQuery, {
    ...options,
    client: saleor.client,
    fetchPolicy: "cache-first",
    context: {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    },
  });
};
