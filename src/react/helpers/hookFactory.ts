import { useContext } from "react";
import { SaleorClient } from "../../core/types";
import { SaleorContext } from "../components/SaleorProvider";

const CreateSaleorHook = <T extends keyof SaleorClient>(
  key: T
): SaleorClient[T] => {
  const saleorContext = useContext(SaleorContext);

  if (!saleorContext) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  const getHookData = (): SaleorClient[T] => {
    return saleorContext[key];
  };

  return getHookData();
};

export const hookFactory = <T extends keyof SaleorClient>(
  query: T
) => (): SaleorClient[T] => CreateSaleorHook(query);
