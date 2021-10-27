import omitDeep from "omit-deep-lodash";
import { GraphQLRequest } from "msw";
import jwt from "jsonwebtoken";

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
