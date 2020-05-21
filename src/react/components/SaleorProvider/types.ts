import ApolloClient from "apollo-client";

import { Config } from "../../../types";

export interface IProps {
  children: React.ReactElement;
  config?: Config;
  client: ApolloClient<any>;
}
