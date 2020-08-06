import { CollectionList } from "../../../api/collections/CollectionList";
import makeList from "./makeList";

const useCollectionList = makeList(client => new CollectionList(client));

export default useCollectionList;
