import { USER } from "../apollo/queries";
import { UserDetailsQuery } from "../apollo/types";
import { SaleorClientInternals } from "./types";

export type State = UserDetailsQuery | null;

export const getState = (
  client: SaleorClientInternals["apolloClient"]
): State =>
  client.readQuery<UserDetailsQuery>({
    query: USER,
  });
