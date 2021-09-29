import omitDeep from "omit-deep-lodash";

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
