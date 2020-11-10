import { ApolloClient } from "apollo-client";
import { setupAPI } from "./api";
import { LocalStorageHandler } from "../src/helpers";
import { defaultConfig } from "../src/config";
import { JobsManager } from "../src/jobs";
import { SaleorState } from "../src/state";
import { AuthAPI } from "../src/api/Auth";
import APIProxy from "../src/api/APIProxy";
import { SaleorContextType } from "../src/react/context";
import { ApolloClientManager } from "../src/data/ApolloClientManager";
import { SaleorCheckoutAPI } from "../src/api/Checkout";
import { SaleorCartAPI } from "../src/api/Cart";
import { LocalStorageManager } from "../src/data/LocalStorageManager";
import { CategoriesAPI } from "../src/api/categories/categories";
import { CollectionsAPI } from "../src/api/collections";
import { ProductsAPI } from "../src/api/products";

export async function setupContextAndAPI(): Promise<{
  context: SaleorContextType;
  client: ApolloClient<any>;
}> {
  const { client, apiUrl } = await setupAPI();

  const config = {
    ...defaultConfig,
    apiUrl,
    channel: "default-channel",
  };
  const localStorageHandler = new LocalStorageHandler();
  const apolloClientManager = new ApolloClientManager(client);
  const jobsManager = new JobsManager(localStorageHandler, apolloClientManager);
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

  const authAPI = new AuthAPI(saleorState, jobsManager, config);
  const apiProxy = new APIProxy(client);
  const checkout = new SaleorCheckoutAPI(saleorState, jobsManager, config);
  const cart = new SaleorCartAPI(
    localStorageManager,
    apolloClientManager,
    saleorState,
    jobsManager,
    config
  );
  const categories = new CategoriesAPI(client);
  const collections = new CollectionsAPI(client, config);
  const products = new ProductsAPI(client, config);

  return {
    client,
    context: {
      api: {
        auth: authAPI,
        cart,
        categories,
        checkout,
        collections,
        legacyAPIProxy: apiProxy,
        products,
      },
      config,
    },
  };
}
