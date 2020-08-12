import setupAPI from "../../../testUtils/api";
import { ProductsAPI } from "./products";
import { OrderDirection, ProductOrderField } from "../../gqlTypes/globalTypes";

const { client } = setupAPI();

describe("Product object", () => {
  const productsAPI = new ProductsAPI(client);
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
