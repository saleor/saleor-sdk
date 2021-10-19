import { ExternalRefreshMutation } from "../../src/apollo/types";
import { createToken, testCsrfToken } from "../utils";

export const mockExternalRefresh = () =>
  ({
    externalRefresh: {
      __typename: "ExternalRefresh",
      token: createToken(),
      csrfToken: testCsrfToken,
      errors: [],
    },
  } as ExternalRefreshMutation);

export const mockExternalRefreshError = () =>
  ({
    externalRefresh: {
      __typename: "ExternalRefresh",
      errors: [
        {
          message: "Token cannot be refreshed",
          code: "GRAPHQL_ERROR",
        },
      ],
    },
  } as ExternalRefreshMutation);
