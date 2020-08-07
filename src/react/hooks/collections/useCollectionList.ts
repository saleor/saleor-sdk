import { CollectionList } from "../../../api/collections/CollectionList";
import { makeList } from "../utils";

const useCollectionList = makeList(client => new CollectionList(client));

export default useCollectionList;
