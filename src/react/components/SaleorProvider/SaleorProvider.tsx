import React, { useEffect, useMemo, useState } from "react";

import { SaleorManager } from "../../../";
import { SaleorAPI } from "../../../api";
import { SaleorContext } from "../../context";
import { IProps } from "./types";

import { invalidTokenLinkWithTokenHandler } from "../../../auth";

export function SaleorProvider<TCacheShape = any>({
  config,
  children,
  attachApolloClient,
}: IProps<TCacheShape>): React.ReactElement<IProps<TCacheShape>> {
  const [context, setContext] = useState<SaleorAPI | null>(null);
  const [tokenExpired, setTokenExpired] = useState(false);

  const tokenExpirationCallback = () => {
    setTokenExpired(true);
  };

  const apolloClient = React.useMemo(() => {
    const { link: invalidTokenLink } = invalidTokenLinkWithTokenHandler(
      tokenExpirationCallback
    );

    return attachApolloClient(invalidTokenLink);
  }, []);

  useEffect(() => {
    if (tokenExpired) {
      context?.auth.signOut();
      setTokenExpired(false);
    }
  }, [tokenExpired, context]);

  useMemo(() => {
    const manager = new SaleorManager(apolloClient, config);

    manager.connect((saleorAPI) => setContext({ ...saleorAPI }));

    return manager;
  }, []);

  return (
    <SaleorContext.Provider value={context}>
      {context ? children : <></>}
    </SaleorContext.Provider>
  );
}
