import { graphql } from "msw";
import {
  TEST_AUTH_EXTERNAL_LOGIN_CALLBACK,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
} from "../src/config";
import {
  mockExternalAuthenticationUrl,
  mockExternalAuthenticationUrlError,
} from "./mocks/externalAuthenticationUrl";
import {
  mockExternalObtainAccessTokens,
  mockExternalObtainAccessTokensError,
} from "./mocks/externalObtainAccessTokens";
import {
  mockExternalRefresh,
  mockExternalRefreshError,
} from "./mocks/externalRefresh";
import {
  mockExternalVerify,
  mockExternalVerifyError,
} from "./mocks/externalVerify";
import { verifyToken } from "./utils";

export const mockHandlers = [
  graphql.mutation("externalAuthenticationUrl", (req, res, ctx) => {
    const { pluginId, input } = req.variables;
    const parsedInput = JSON.parse(input);

    if (
      pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
      parsedInput.redirectUri === TEST_AUTH_EXTERNAL_LOGIN_CALLBACK
    ) {
      return res(ctx.data(mockExternalAuthenticationUrl()));
    }

    return res(ctx.data(mockExternalAuthenticationUrlError()));
  }),

  graphql.mutation("externalObtainAccessTokens", (req, res, ctx) => {
    const { pluginId, input } = req.variables;
    const parsedInput = JSON.parse(input);

    if (
      pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
      parsedInput.code === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE &&
      parsedInput.state === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE
    ) {
      return res(ctx.data(mockExternalObtainAccessTokens()));
    }

    return res(ctx.data(mockExternalObtainAccessTokensError()));
  }),

  graphql.mutation("externalRefresh", (req, res, ctx) => {
    const { pluginId, input } = req.variables;
    const parsedInput = JSON.parse(input);

    if (
      pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
      !!parsedInput.csrfToken
    ) {
      return res(ctx.data(mockExternalRefresh()));
    }

    return res(ctx.data(mockExternalRefreshError()));
  }),

  graphql.mutation("externalVerify", (req, res, ctx) => {
    const { pluginId, input } = req.variables;
    const token = req.headers.get("authorization-bearer") || "";
    const parsedInput = JSON.parse(input);

    const isTokenValid = verifyToken(token);

    if (
      pluginId === TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID &&
      !!parsedInput.csrfToken &&
      isTokenValid
    ) {
      return res(ctx.data(mockExternalVerify()));
    }

    return res(ctx.data(mockExternalVerifyError()));
  }),
];
