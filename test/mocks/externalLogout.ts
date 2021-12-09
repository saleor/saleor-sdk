import { graphql } from "msw";
import {
  ExternalLogoutMutation,
  ExternalLogoutMutationVariables,
} from "../../src/apollo/types";
import {
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
  TEST_AUTH_EXTERNAL_LOGOUT_CALLBACK,
} from "../../src/config";

const externalLogout = (returnTo: string) =>
  ({
    externalLogout: {
      __typename: "ExternalLogout",
      logoutData: JSON.stringify({
        logoutUrl: `https://example.com?returnTo=${encodeURIComponent(
          returnTo
        )}`,
      }),
      errors: [],
    },
  } as ExternalLogoutMutation);

const externalLogoutError = () =>
  ({
    externalLogout: {
      __typename: "ExternalLogout",
      logoutData: null,
      errors: [
        {
          message: "Unable to external logout",
          code: "GRAPHQL_ERROR",
          field: null,
        },
      ],
    },
  } as ExternalLogoutMutation);

export const externalLogoutHandler = graphql.mutation<
  ExternalLogoutMutation,
  ExternalLogoutMutationVariables
>("externalLogout", (req, res, ctx) => {
  const { pluginId, input } = req.variables;
  const parsedInput = JSON.parse(input);

  if (
    pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
    parsedInput.returnTo === TEST_AUTH_EXTERNAL_LOGOUT_CALLBACK
  ) {
    return res(ctx.data(externalLogout(TEST_AUTH_EXTERNAL_LOGOUT_CALLBACK)));
  }

  return res(ctx.data(externalLogoutError()));
});
