import omitDeep from "omit-deep-lodash";
import { GraphQLRequest } from "msw";
import jwt from "jsonwebtoken";
import { SaleorClient } from "../src/core";
import {
  ExternalObtainAccessTokensMutation,
  LoginMutation,
} from "../src/apollo/types";
import {
  TEST_AUTH_EMAIL,
  TEST_AUTH_EXTERNAL_LOGIN_CALLBACK,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
  TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
  TEST_AUTH_PASSWORD,
} from "../src/config";

export const removeBlacklistedVariables = (obj: {}): {} => {
  const variablesBlacklist = [
    "email",
    "password",
    "redirectUrl",
    "newPassword",
    "oldPassword",
    "newEmail",
    "token",
    "refreshToken",
    "csrfToken",
  ];

  return omitDeep(obj, ...variablesBlacklist);
};

const testTokenExpirationPeriodInSeconds = 3600; // 1 hour by default
export const testTokenSecret = "secret";
export const testCsrfToken =
  "sSrkI91Yyho52LTNWLuh6WkPwC5NAP49n1TdB4Oh4Hrw7NuQ1oj7ga3j5aE82b2O";
export const createTestToken = (
  expirationPeriodInSeconds: number = testTokenExpirationPeriodInSeconds
): string =>
  jwt.sign(
    {
      data: Math.random(), // to prevent generating the same tokens within the same second - some tests may try to create tokens quickly
      exp: Math.floor(Date.now() / 1000) + expirationPeriodInSeconds,
    },
    testTokenSecret
  );
export const verifyTestToken = (token: string): boolean => {
  try {
    jwt.verify(token, testTokenSecret);
  } catch (err) {
    return false;
  }
  return true;
};
export const verifyAuthorization = (request: GraphQLRequest<any>) => {
  const token = request.headers.get("authorization-bearer") || "";
  const isTokenValid = verifyTestToken(token);

  return isTokenValid;
};

interface CallbackQueryParams {
  code: string;
  state: string;
}

export const login = async (
  saleor: SaleorClient
): Promise<LoginMutation | null | undefined> => {
  const { data } = await saleor.auth.login({
    email: TEST_AUTH_EMAIL,
    password: TEST_AUTH_PASSWORD,
  });

  return data;
};

export const loginWithExternalPlugin = async (
  saleor: SaleorClient,
  callbackQueryParams?: CallbackQueryParams
): Promise<ExternalObtainAccessTokensMutation | null | undefined> => {
  const { data: authUrl } = await saleor.auth.getExternalAuthUrl({
    pluginId: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
    input: JSON.stringify({
      redirectUri: TEST_AUTH_EXTERNAL_LOGIN_CALLBACK,
    }),
  });
  expect(authUrl?.externalAuthenticationUrl?.errors).toHaveLength(0);
  // Assume client redirects to external plugin and redirects back to callback address with following params
  const callbackParams: CallbackQueryParams = callbackQueryParams || {
    code: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_CODE,
    state: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_RESPONSE_STATE,
  };
  const { data: accessToken } = await saleor.auth.getExternalAccessToken({
    pluginId: TEST_AUTH_EXTERNAL_LOGIN_PLUGIN_ID,
    input: JSON.stringify(callbackParams),
  });

  return accessToken;
};
