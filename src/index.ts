import { ApolloCache } from "apollo-cache";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { RetryLink } from "apollo-link-retry";

import { SaleorAPI } from "./api";
import { ConfigInput } from "./types";
import APIProxy from "./api/APIProxy";
import { authLink, invalidTokenLinkWithTokenHandler } from "./auth";

export function createSaleorClient(
  cache: ApolloCache<any>,
  links: ApolloLink[]
) {
  return new ApolloClient({
    cache,
    link: ApolloLink.from(links),
  });
}

export const createSaleorLinks = ({
  apiUrl,
  tokenExpirationCallback,
}: {
  apiUrl: string;
  tokenExpirationCallback: () => void;
}) => {
  const invalidTokenLink = invalidTokenLinkWithTokenHandler(
    tokenExpirationCallback
  );

  return [
    invalidTokenLink,
    authLink,
    new RetryLink(),
    new BatchHttpLink({ uri: apiUrl }),
  ];
};

export class SaleorManager {
  private apiProxy: APIProxy;

  private api: SaleorAPI;

  private apiChangeListener: ((api: SaleorAPI) => any) | undefined;

  constructor(client: ApolloClient<any>, config: ConfigInput) {
    this.apiProxy = new APIProxy(client);
    this.api = new SaleorAPI(
      client,
      this.apiProxy,
      config,
      this.onSaleorAPIChange
    );
  }

  /**
   * Use this method to obtain current API and listen to its update on occured changes within it.
   * @param apiChangeListener Function called to get an API and called on every API update.
   */
  connect(apiChangeListener: (api: SaleorAPI) => any) {
    this.apiChangeListener = apiChangeListener;
    this.apiChangeListener(this.api);
  }

  private onSaleorAPIChange = () => {
    if (this.apiChangeListener) {
      this.apiChangeListener(this.api);
    }
  };
}

export * from "./auth";
export * from "./gqlTypes/globalTypes";

// FIXME: It's imported here because it's not a monorepo yet
/* eslint-disable import/no-cycle */
export * from "./react";
/* eslint-enable */
