import { graphql } from "msw";
import {
  ExternalObtainAccessTokensMutation,
  ExternalObtainAccessTokensMutationVariables,
} from "../../src/apollo/types";
import {
  TEST_AUTH_EMAIL,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
} from "../../src/config";
import { createTestToken, testCsrfToken } from "../utils";

const externalObtainAccessTokens = (tokenExpirationPeriodInSeconds?: number) =>
  ({
    externalObtainAccessTokens: {
      __typename: "ExternalObtainAccessTokens",
      token: createTestToken(tokenExpirationPeriodInSeconds),
      // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzQ2MzYzMDAsImlzcyI6Im1hc3Rlci5zdGFnaW5nLnNhbGVvci5jbG91ZCIsIm93bmVyIjoic2FsZW9yIiwiZXhwIjoxNjM0NjM2NjAwLCJ0b2tlbiI6Ik0yaXJGbXpWQVNSMyIsImVtYWlsIjoidGVzdGVycytkYXNoYm9hcmRAc2FsZW9yLmlvIiwidHlwZSI6ImFjY2VzcyIsInVzZXJfaWQiOiJWWE5sY2pveE1ETXoiLCJpc19zdGFmZiI6dHJ1ZX0.XDO2-_pISP5ouclcchu-6fNeBnTbyYvZ86UIJBOM0lw",
      csrfToken: testCsrfToken,
      user: {
        id: "VXNlcjoxMDMz",
        email: TEST_AUTH_EMAIL,
        firstName: "",
        lastName: "",
        isStaff: true,
        metadata: [],
        addresses: [],
        defaultBillingAddress: null,
        defaultShippingAddress: null,
        __typename: "User",
      },
      errors: [],
    },
  } as ExternalObtainAccessTokensMutation);

const externalObtainAccessTokensError = () =>
  ({
    externalObtainAccessTokens: {
      __typename: "ExternalObtainAccessTokens",
      user: null,
      token: null,
      csrfToken: null,
      errors: [
        {
          message: "Invalid code or state",
          code: "INVALID",
          field: null,
        },
      ],
    },
  } as ExternalObtainAccessTokensMutation);

export const externalObtainAccessTokensHandler = graphql.mutation<
  ExternalObtainAccessTokensMutation,
  ExternalObtainAccessTokensMutationVariables
>("externalObtainAccessTokens", (req, res, ctx) => {
  const { pluginId, input } = req.variables;
  const parsedInput = JSON.parse(input);

  if (
    pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
    parsedInput.code === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE &&
    parsedInput.state === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE
  ) {
    return res(ctx.data(externalObtainAccessTokens()));
  }

  return res(ctx.data(externalObtainAccessTokensError()));
});
