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
  ];

  return omitDeep(obj, ...variablesBlacklist);
};
