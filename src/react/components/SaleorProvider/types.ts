import { ConfigInput, ApolloConfigInput } from "../../../types";

export interface IProps {
  children: React.ReactElement;
  /**
   * SDK configuration.
   */
  config: ConfigInput;
  /**
   * Apollo client configuration.
   */
  apolloConfig?: ApolloConfigInput;
}
