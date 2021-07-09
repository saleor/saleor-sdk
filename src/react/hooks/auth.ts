import { USER } from "../../apollo/queries";
import {
  Maybe,
  UserFragment,
  UserDetailsQuery,
  UserDetailsQueryVariables,
} from "../../apollo/types";
import { hookFactory } from "../helpers/hookFactory";
import { hookStateFactory } from "../helpers/hookStateFactory";

type AuthState = {
  user: Maybe<UserFragment> | undefined;
  authenticated: boolean | undefined;
};

/**
 * React hook to get authorization methods
 *
 * @returns Saleor's authorization methods
 */
export const useAuth = hookFactory("auth");

/**
 * React hook to get user's authentication data.
 *
 * @returns Object with user's data
 */
export const useAuthState = (): AuthState => {
  const { data } = hookStateFactory<
    UserDetailsQuery,
    UserDetailsQueryVariables
  >(USER);

  return { user: data?.me, authenticated: !!data?.authenticated };
};
