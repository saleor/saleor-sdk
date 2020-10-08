import { CollectionDetails } from "../../api/collections/CollectionDetails";
import { CollectionList } from "../../api/collections/CollectionList";
import { makeDetails, makeList } from "./utils";

export const useCollectionList = makeList(client => new CollectionList(client));
export const useCollectionDetails = makeDetails(
  client => new CollectionDetails(client)
);
