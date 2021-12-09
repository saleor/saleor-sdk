import { graphql } from "msw";
import {
  ExternalAuthenticationUrlMutation,
  ExternalAuthenticationUrlMutationVariables,
} from "../../src/apollo/types";
import {
  TEST_AUTH_EXTERNAL_LOGIN_CALLBACK,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
} from "../../src/config";

const externalAuthenticationUrl = () =>
  ({
    externalAuthenticationUrl: {
      __typename: "ExternalAuthenticationUrl",
      authenticationData: JSON.stringify({
        redirect: "https://example.com/auth",
      }),
      errors: [],
    },
  } as ExternalAuthenticationUrlMutation);

const externalAuthenticationUrlError = () =>
  ({
    externalAuthenticationUrl: {
      __typename: "ExternalAuthenticationUrl",
      authenticationData: null,
      errors: [
        {
          message: "Invalid code or state",
          code: "INVALID",
          field: null,
        },
      ],
    },
  } as ExternalAuthenticationUrlMutation);

export const externalAuthenticationUrlHandler = graphql.mutation<
  ExternalAuthenticationUrlMutation,
  ExternalAuthenticationUrlMutationVariables
>("externalAuthenticationUrl", (req, res, ctx) => {
  const { pluginId, input } = req.variables;
  const parsedInput = JSON.parse(input);

  if (
    pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
    parsedInput.redirectUri === TEST_AUTH_EXTERNAL_LOGIN_CALLBACK
  ) {
    return res(ctx.data(externalAuthenticationUrl()));
  }

  return res(ctx.data(externalAuthenticationUrlError()));
});
