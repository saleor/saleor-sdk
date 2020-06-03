import { CustomConfig } from "../../../types";
import ApolloClient from "apollo-client";

export interface IProps {
  children: (client: ApolloClient<any>) => React.ReactElement;
  config: CustomConfig;
}
