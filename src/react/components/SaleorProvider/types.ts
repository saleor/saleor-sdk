import { ConfigInput, ApolloConfigInput } from "../../../types";

export interface IProps {
  children: React.ReactElement;
  config: ConfigInput;
  apolloConfig?: ApolloConfigInput;
}
