import { useApolloClient } from "react-apollo";
import { useEffect, useRef, useState } from "react";
import ApolloClient from "apollo-client";
import {
  CollectionList as CollectionListQuery,
  CollectionListVariables,
} from "../../../queries/gqlTypes/CollectionList";
import { BaseCollection } from "../../../fragments/gqlTypes/BaseCollection";
import { ListParameters } from "../../../api/types";
import { collections } from "../../../queries/collections";
import { CollectionList } from "../../../api/collections/CollectionList";

function query(client: ApolloClient<any>) {
  return (variables: CollectionListVariables) =>
    client.query<CollectionListQuery, CollectionListVariables>({
      query: collections,
      variables,
    });
}

function useCollectionList(params: ListParameters) {
  const client = useApolloClient();
  const [data, setData] = useState<BaseCollection[] | undefined>(undefined);
  const list = useRef<CollectionList>();
  const willMount = useRef(true);

  async function initList() {
    list.current = new CollectionList(query(client), params.count);
    await list.current.init({
      after: params.endCursor,
      first: params.count,
    });
    setData(list.current.data);
  }

  useEffect(() => {
    if (!willMount.current) {
      initList();
    }
  }, [params.count, params.endCursor]);

  if (willMount.current) {
    initList();
    willMount.current = false;
  }

  const next = async () => {
    const nextData = await list.current?.next();
    setData(nextData);
  };

  return {
    current: list.current?.current,
    data,
    loading: list.current?.loading,
    next,
    pageInfo: list.current?.pageInfo,
  };
}

export default useCollectionList;
