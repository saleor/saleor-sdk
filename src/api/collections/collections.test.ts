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
    await list.current;

    expect(list.data).toMatchSnapshot();
  });
});
