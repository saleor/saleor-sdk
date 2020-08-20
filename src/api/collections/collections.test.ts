import ApolloClient from "apollo-client";
import setupAPI from "../../../testUtils/api";
import { CollectionsAPI } from "./collections";
import {
  OrderDirection,
  CollectionSortField,
} from "../../gqlTypes/globalTypes";

describe("Collection object", () => {
  let client: ApolloClient<any>;
  let collectionsAPI: CollectionsAPI;

  beforeAll(async done => {
    client = (await setupAPI()).client;
    collectionsAPI = new CollectionsAPI(client);

    done();
  });

  it("can get a list of collections", async () => {
    const list = collectionsAPI.getList({
      first: 20,
    });

    expect(list.data).toBeUndefined();
    expect(list.loading).toBe(true);
    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get new page", async () => {
    const list = collectionsAPI.getList({
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
    const list = collectionsAPI.getList({
      first: 20,
      sortBy: {
        direction: OrderDirection.DESC,
        field: CollectionSortField.NAME,
      },
    });

    await list.current;

    expect(list.data).toMatchSnapshot();
  });

  it("can filter", async () => {
    const list = collectionsAPI.getList({
      filter: {
        search: "winter",
      },
      first: 20,
    });

    await list.current;

    expect(list.data).toMatchSnapshot();
  });
});
