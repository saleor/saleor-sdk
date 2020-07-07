import { ApolloClient } from "apollo-client";

import { SaleorAPI } from "./api";
import { ConfigInput } from "./types";
import APIProxy from "./api/APIProxy";

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
export * from "./cache";
export * from "./links";
export * from "./client";
export * from "./gqlTypes/globalTypes";

// FIXME: It's imported here because it's not a monorepo yet
/* eslint-disable import/no-cycle */
export * from "./react";
/* eslint-enable */
