import { graphql } from "msw";
import {
  ExternalRefreshMutation,
  ExternalRefreshMutationVariables,
} from "../../src/apollo/types";
import { TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID } from "../../src/config";
import { createTestToken, testCsrfToken } from "../utils";

const externalRefresh = (tokenExpirationPeriodInSeconds?: number) =>
  ({
    externalRefresh: {
      __typename: "ExternalRefresh",
      token: createTestToken(tokenExpirationPeriodInSeconds),
      csrfToken: testCsrfToken,
      errors: [],
    },
  } as ExternalRefreshMutation);

const externalRefreshError = () =>
  ({
    externalRefresh: {
      __typename: "ExternalRefresh",
      csrfToken: null,
      token: null,
      errors: [
        {
          message: "Token cannot be refreshed",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as ExternalRefreshMutation);

export const externalRefreshHandler = (
  tokenExpirationPeriodInSeconds?: number
) =>
  graphql.mutation<ExternalRefreshMutation, ExternalRefreshMutationVariables>(
    "externalRefresh",
    (req, res, ctx) => {
      const { pluginId, input } = req.variables;
      const parsedInput = JSON.parse(input);

      if (
        pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
        !!parsedInput.csrfToken
      ) {
        return res(ctx.data(externalRefresh(tokenExpirationPeriodInSeconds)));
      }

      return res(ctx.data(externalRefreshError()));
    }
  );
