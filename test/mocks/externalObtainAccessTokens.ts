import { graphql } from "msw";
import {
  ExternalObtainAccessTokensMutation,
  ExternalObtainAccessTokensMutationVariables,
} from "../../src/apollo/types";
import {
  TEST_AUTH_EMAIL,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_SECOND_CODE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_SECOND_STATE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
  TEST_AUTH_SECOND_EMAIL,
} from "../../src/config";
import { createTestToken, testRefreshToken } from "../utils";

const externalObtainAccessTokens = (
  tokenExpirationPeriodInSeconds?: number,
  email?: string
) =>
  ({
    externalObtainAccessTokens: {
      __typename: "ExternalObtainAccessTokens",
      token: createTestToken(tokenExpirationPeriodInSeconds),
      refreshToken: testRefreshToken,
      user: {
        id: "VXNlcjoxMDMz",
        email: email,
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
      refreshToken: null,
      errors: [
        {
          message: "Invalid code or state",
          code: "INVALID",
          field: null,
        },
      ],
    },
  } as ExternalObtainAccessTokensMutation);

export const externalObtainAccessTokensHandler = (
  tokenExpirationPeriodInSeconds?: number
) =>
  graphql.mutation<
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
      return res(
        ctx.data(
          externalObtainAccessTokens(
            tokenExpirationPeriodInSeconds,
            TEST_AUTH_EMAIL
          )
        )
      );
    }
    if (
      pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
      parsedInput.code ===
        TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_SECOND_CODE &&
      parsedInput.state ===
        TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_SECOND_STATE
    ) {
      return res(
        ctx.data(
          externalObtainAccessTokens(
            tokenExpirationPeriodInSeconds,
            TEST_AUTH_SECOND_EMAIL
          )
        )
      );
    }

    return res(ctx.data(externalObtainAccessTokensError()));
  });
