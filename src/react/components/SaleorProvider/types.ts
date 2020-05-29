import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";

import { Config } from "../../../types";

export interface IProps<TCacheShape> {
  children: React.ReactElement;
  config?: Config;
  attachApolloClient: (
    invalidTokenLink: ApolloLink
  ) => ApolloClient<TCacheShape>;
}
