import ApolloClient from "apollo-client";
import { ProductsAPI } from "./products";
import { OrderDirection, ProductOrderField } from "../../gqlTypes/globalTypes";
import { setupAPI, setupRecording } from "../../../testUtils/api";

setupRecording();

describe("Product object", () => {
  let client: ApolloClient<any>;
  let productsAPI: ProductsAPI;

  beforeAll(async done => {
    client = (await setupAPI()).client;
    productsAPI = new ProductsAPI(client);

    done();
  });

  it("can get a list of products", async () => {
    const list = productsAPI.getList({
      first: 20,
    });

    expect(list.data).toBeUndefined();
    expect(list.loading).toBe(true);
    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get new page", async () => {
    const list = productsAPI.getList({
      first: 1,
    });

    await list.current;

    expect(list.data).toMatchSnapshot();

    list.next();

    expect(list.loading).toBe(true);

    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can sort", async () => {
    const list = productsAPI.getList({
      first: 20,
      sortBy: {
        direction: OrderDirection.DESC,
        field: ProductOrderField.NAME,
      },
    });

    await list.current;

    expect(list.data).toMatchSnapshot();
  });

  it("can filter", async () => {
    const list = productsAPI.getList({
      filter: {
        search: "beer",
      },
      first: 20,
    });

    await list.current;

    expect(list.data).toMatchSnapshot();
  });
});
