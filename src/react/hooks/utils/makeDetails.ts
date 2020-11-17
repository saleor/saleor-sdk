import { useApolloClient } from "react-apollo";
import { useEffect, useRef, useState } from "react";
import ApolloClient from "apollo-client";
import { useSaleorConfig } from "../../helpers";
import BaseDetails from "../../../helpers/BaseDetails";

export function makeDetails<TObject, TQuery, TVariables>(
  createDetails: (
    client: ApolloClient<any>
  ) => BaseDetails<TQuery, TObject, TVariables>
) {
  return (variables: TVariables) => {
    const client = useApolloClient();
    const config = useSaleorConfig();
    const [data, setData] = useState<TObject | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const details = useRef<BaseDetails<TQuery, TObject, TVariables>>();
    const willMount = useRef(true);

    async function initDetails() {
      setLoading(true);
      details.current = createDetails(client);
      await details.current.init({ channel: config.channel, ...variables });
      setData(details.current.data);
      setLoading(false);
    }

    useEffect(() => {
      if (!willMount.current) {
        initDetails();
      }
    }, [JSON.stringify({ channel: config.channel, ...variables })]);

    if (willMount.current) {
      initDetails();
      willMount.current = false;
    }

    return {
      current: details.current?.current,
      data,
      loading,
    };
  };
}
