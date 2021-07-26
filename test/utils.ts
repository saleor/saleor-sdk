import { ApolloClient } from "@apollo/client";
import omitDeep from "omit-deep-lodash";

import { USER } from "../src/apollo/queries";
import { UserDetailsQuery } from "../src/apollo/types";

export const removeBlacklistedVariables = (obj: {}): {} => {
  const variablesBlacklist = [
    "email",
    "password",
    "redirectUrl",
    "newPassword",
    "oldPassword",
    "newEmail",
    "token",
  ];

  return omitDeep(obj, ...variablesBlacklist);
};

export const readUserCache = (
  client: ApolloClient<any>
): UserDetailsQuery | null =>
  client.readQuery<UserDetailsQuery>({
    query: USER,
  });
