import ApolloClient from "apollo-client";
import { setupRecording, setupAPI } from "../../../testUtils/api";
import { CategoriesAPI } from "./categories";
import * as fixtures from "./fixtures";

setupRecording();

describe("Categories object", () => {
  let client: ApolloClient<any>;
  let categoriesAPI: CategoriesAPI;

  beforeAll(async done => {
    client = (await setupAPI()).client;
    categoriesAPI = new CategoriesAPI(client);

    done();
  });

  it("can get a details of category", async () => {
    const details = await categoriesAPI.getDetails({
      id: fixtures.categoryWithChildren,
    });

    expect(details.data).toMatchSnapshot();
    expect(details.loading).toBe(false);
  });

  it("can get a list of categories", async () => {
    const list = await categoriesAPI.getList({
      first: 20,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get new page", async () => {
    const list = await categoriesAPI.getList({
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

  it("can get a list of subcategories", async () => {
    const list = await categoriesAPI.getChildren({
      first: 20,
      id: fixtures.categoryWithChildren,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get a list of ancestor categories", async () => {
    const list = await categoriesAPI.getAncestors({
      first: 20,
      id: fixtures.categoryWithParent,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });
});
