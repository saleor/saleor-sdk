import { CollectionList } from "../../api/collections/CollectionList";
import { makeList } from "./utils";

export const useCollectionList = makeList(client => new CollectionList(client));
