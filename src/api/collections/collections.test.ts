import ApolloClient from "apollo-client";
import { setupRecording, setupAPI } from "../../../testUtils/api";
import { CollectionsAPI } from "./collections";
import { defaultConfig } from "../../config";
import {
  OrderDirection,
  CollectionSortField,
} from "../../gqlTypes/globalTypes";
import * as fixtures from "./fixtures";

setupRecording();

describe("Collection object", () => {
  let client: ApolloClient<any>;
  let collectionsAPI: CollectionsAPI;

  beforeAll(async done => {
    client = (await setupAPI()).client;
    collectionsAPI = new CollectionsAPI(client, {
      ...defaultConfig,
      apiUrl: "",
      channel: "default-channel",
    });

    done();
  });

  it("can get a details of collection by id", async () => {
    const details = await collectionsAPI.getDetails({
      id: fixtures.collectionId,
    });

    expect(details.data).toMatchSnapshot();
    expect(details.loading).toBe(false);
  });

  it("can get a details of collection by slug", async () => {
    const details = await collectionsAPI.getDetails({
      slug: fixtures.collectionSlug,
    });

    expect(details.data).toMatchSnapshot();
    expect(details.loading).toBe(false);
  });

  it("can get a list of collections", async () => {
    const list = await collectionsAPI.getList({
      first: 20,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get new page", async () => {
    const list = await collectionsAPI.getList({
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
    const list = await collectionsAPI.getList({
      first: 20,
      sortBy: {
        direction: OrderDirection.DESC,
        field: CollectionSortField.NAME,
      },
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can filter", async () => {
    const list = await collectionsAPI.getList({
      filter: {
        search: "winter",
      },
      first: 20,
    });

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });
});
