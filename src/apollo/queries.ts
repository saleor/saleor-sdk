import { gql } from "@apollo/client";
import { userFragment } from "./fragments";

export const USER = gql`
  ${userFragment}
  query UserDetails {
    user: me {
      ...UserFragment
    }
    token @client
    authenticated @client
    authenticating @client
  }
`;
