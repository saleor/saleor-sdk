import setupAPI from "../../../testUtils/api";
import { CategoriesAPI } from "./categories";

const { client } = setupAPI();

describe("Categories object", () => {
  const categoriesAPI = new CategoriesAPI(client);

  it("can get a list of categories", async () => {
    const list = categoriesAPI.getList({
      first: 20,
    });

    expect(list.data).toBeUndefined();
    expect(list.loading).toBe(true);
    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get new page", async () => {
    const list = categoriesAPI.getList({
      first: 1,
    });

    expect(list.data).toBeUndefined();
    expect(list.loading).toBe(true);
    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);

    list.next();

    expect(list.loading).toBe(true);

    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get a list of subcategories", async () => {
    const list = categoriesAPI.getChildren({
      first: 20,
      id: "Q2F0ZWdvcnk6Nw==",
    });

    expect(list.data).toBeUndefined();
    expect(list.loading).toBe(true);
    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get a list of ancestor categories", async () => {
    const list = categoriesAPI.getAncestors({
      first: 20,
      id: "Q2F0ZWdvcnk6MjI=",
    });

    expect(list.data).toBeUndefined();
    expect(list.loading).toBe(true);
    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });
});
