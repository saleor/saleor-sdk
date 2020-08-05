import setupAPI from "../../../testUtils/api";
import { CollectionsAPI } from "./collections";

const { client } = setupAPI();

describe("Collection object", () => {
  it("can get a list of collections", async () => {
    const collectionsAPI = new CollectionsAPI(client);
    const list = collectionsAPI.getList({
      count: 20,
    });

    expect(list.data).toBeUndefined();
    expect(list.loading).toBe(true);
    await list.current;

    expect(list.data).toMatchSnapshot();
    expect(list.loading).toBe(false);
  });

  it("can get new page", async () => {
    const collectionsAPI = new CollectionsAPI(client);
    const list = collectionsAPI.getList({
      count: 1,
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
});
