import ApolloClient from "apollo-client";
import { ProductsAPI } from "./products";
import { defaultConfig } from "../../config";
import { OrderDirection, ProductOrderField } from "../../gqlTypes/globalTypes";
import { setupAPI, setupRecording } from "../../../testUtils/api";
import * as fixtures from "./fixtures";

setupRecording();

describe("Product object", () => {
  let client: ApolloClient<any>;
  let productsAPI: ProductsAPI;

  beforeAll(async done => {
    client = (await setupAPI()).client;
    productsAPI = new ProductsAPI(client, {
      ...defaultConfig,
      apiUrl: "",
      channel: "default-channel",
    });

    done();
  });

  it("can get a details of product by id", async () => {
    const details = await productsAPI.getDetails({
      id: fixtures.productId,
    });

    expect(details.data).toMatchSnapshot();
    expect(details.loading).toBe(false);
  });

  it("can get a details of product by slug", async () => {
    const details = await productsAPI.getDetails({
      slug: fixtures.productSlug,
    });

    expect(details.data).toMatchSnapshot();
    expect(details.loading).toBe(false);
  });

  it("can get a list of products", async () => {
    const list = await productsAPI.getList({
      first: 20,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get new page", async () => {
    const list = await productsAPI.getList({
      first: 1,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);

    list.next();

    expect(list.loading).toBe(true);

    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can sort", async () => {
    const list = await productsAPI.getList({
      first: 20,
      sortBy: {
        direction: OrderDirection.DESC,
        field: ProductOrderField.NAME,
      },
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can filter", async () => {
    const list = await productsAPI.getList({
      filter: {
        search: "beer",
      },
      first: 20,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });
});
