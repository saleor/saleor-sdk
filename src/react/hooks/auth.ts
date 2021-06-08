import { useContext } from "react";
import { AuthSDK } from "../../core/auth";
import { SaleorContext } from "../context";

export const useAuth = (): AuthSDK => {
  const saleor = useContext(SaleorContext);

  if (!saleor) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  return saleor.api.auth;
};
