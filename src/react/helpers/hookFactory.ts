import { useContext } from "react";
import { Core } from "../../core/types";
import { SaleorContext } from "../components/SaleorProvider";

const CreateSaleorHook = <T extends keyof Core>(key: T): Core[T] => {
  const saleorContext = useContext(SaleorContext);

  if (!saleorContext) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  const getHookData = (): Core[T] => {
    return saleorContext.saleorClient[key];
  };

  return getHookData();
};

export const hookFactory = <T extends keyof Core>(query: T) => (): Core[T] =>
  CreateSaleorHook(query);
