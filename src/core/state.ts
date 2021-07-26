import { USER } from "../apollo/queries";
import { UserDetailsQuery } from "../apollo/types";
import { CoreInternals } from "./types";

export type State = UserDetailsQuery | null;

export const getState = (client: CoreInternals["apolloClient"]): State =>
  client.readQuery<UserDetailsQuery>({
    query: USER,
  });
