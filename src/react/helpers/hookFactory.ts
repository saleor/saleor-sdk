import { Core } from "../../core";
import { useContext } from "react";
import { SaleorContext } from "../context";

const useHook = <T extends keyof Core>(key: T): Core[T] => {
  const saleor = useContext(SaleorContext);

  if (!saleor) {
    throw new Error(
      "Could not find saleor's apollo client in the context. Did you forget to wrap the root component in a <SaleorProvider>?"
    );
  }

  const getHookData = (): Core[T] => {
    return saleor.api[key];
  };

  return getHookData();
};

export const hookFactory = <T extends keyof Core>(query: T) => () =>
  useHook(query);
