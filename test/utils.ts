import omitDeep from "omit-deep-lodash";
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

const tokenExpirationPeriodInSeconds = 240;
export const testTokenSecret = "secret";
export const testCsrfToken =
  "sSrkI91Yyho52LTNWLuh6WkPwC5NAP49n1TdB4Oh4Hrw7NuQ1oj7ga3j5aE82b2O";
export const createToken = (
  expirationPeriodInSeconds: number = tokenExpirationPeriodInSeconds
): string =>
  jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + expirationPeriodInSeconds,
    },
    testTokenSecret
  );
export const verifyToken = (token: string): boolean => {
  try {
    jwt.verify(token, testTokenSecret);
  } catch (err) {
    return false;
  }
  return true;
};
