import ApolloClient from "apollo-client";

import { LocalStorageManager } from "../data";
import { ApolloClientManager } from "../data/ApolloClientManager";
import { LocalStorageHandler } from "../helpers/LocalStorageHandler";
import { JobsManager } from "../jobs";
import { SaleorState } from "../state";
import { Config } from "../types";
import { AuthAPI } from "./Auth";
import APIProxy from "./APIProxy";
import { SaleorCartAPI } from "./Cart";
import { SaleorCheckoutAPI } from "./Checkout";
import { CollectionsAPI } from "./collections/collections";
import { CategoriesAPI } from "./categories/categories";
import { ProductsAPI } from "./products/products";

export * from "./Checkout";
export * from "./Cart";

export class SaleorAPI {
  auth: AuthAPI;

  checkout: SaleorCheckoutAPI;

  cart: SaleorCartAPI;

  categories: CategoriesAPI;

  collections: CollectionsAPI;

  products: ProductsAPI;

  /**
   * @deprecated Please do not use it anymore. Reference to API Proxy will be removed in future.
   * Now it just exists for legacy React hooks, which also will be removed.
   */
  legacyAPIProxy: APIProxy;

  constructor(
    client: ApolloClient<any>,
    apiProxy: APIProxy,
    config: Config,
    onStateUpdate?: () => any
  ) {
    this.legacyAPIProxy = apiProxy;

    const localStorageHandler = new LocalStorageHandler();
    const apolloClientManager = new ApolloClientManager(client);
    const jobsManager = new JobsManager(
      localStorageHandler,
      apolloClientManager
    );
    const saleorState = new SaleorState(
      config,
      localStorageHandler,
      apolloClientManager,
      jobsManager
    );
    const localStorageManager = new LocalStorageManager(
      localStorageHandler,
      saleorState
    );

    if (onStateUpdate) {
      saleorState.subscribeToNotifiedChanges(onStateUpdate);
    }

    this.auth = new AuthAPI(saleorState, jobsManager, config);
    this.checkout = new SaleorCheckoutAPI(saleorState, jobsManager, config);
    this.cart = new SaleorCartAPI(
      localStorageManager,
      apolloClientManager,
      saleorState,
      jobsManager,
      config
    );
    this.categories = new CategoriesAPI(client);
    this.collections = new CollectionsAPI(client, config);
    this.products = new ProductsAPI(client, config);

    this.legacyAPIProxy.attachAuthListener(authenticated => {
      if (!authenticated) {
        localStorageHandler.setCheckout({});
        localStorageHandler.setPayment({});
        localStorageHandler.setJobs(null);
      }
    });
  }
}
